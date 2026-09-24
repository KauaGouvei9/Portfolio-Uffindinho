// Gera public/assets/docs/TCLE_G3.pdf a partir de src/data/entrevistas.js.
//
// Rode com:  node scripts/gerar-tcle.mjs
//
// O PDF e montado na mao porque o projeto nao tem dependencia de geracao de
// PDF, e nao vale a pena adicionar uma so para um documento de texto. Lendo
// direto do arquivo de dados, o PDF nunca fica diferente do que o site mostra.

import { writeFileSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { entrevistas } from '../src/data/entrevistas.js'

const RAIZ = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const SAIDA = resolve(RAIZ, 'public/assets/docs/TCLE_G3.pdf')

// A4 em pontos
const LARGURA = 595.28
const ALTURA = 841.89
const MARGEM = 56
const UTIL = LARGURA - MARGEM * 2

const FONTES = { normal: 'F1', negrito: 'F2' }

// larguras medias por ponto de tamanho, suficientes para quebrar linha
const largura = (texto, tamanho, negrito) =>
  texto.length * tamanho * (negrito ? 0.55 : 0.5)

function quebrar(texto, tamanho, negrito = false, limite = UTIL) {
  const palavras = texto.split(/\s+/)
  const linhas = []
  let atual = ''

  for (const palavra of palavras) {
    const teste = atual ? `${atual} ${palavra}` : palavra
    if (largura(teste, tamanho, negrito) > limite && atual) {
      linhas.push(atual)
      atual = palavra
    } else {
      atual = teste
    }
  }
  if (atual) linhas.push(atual)
  return linhas
}

// PDF usa WinAnsi, que cobre o portugues. Parenteses e barra precisam de escape.
const escapar = (texto) =>
  texto
    .replace(/\\/g, '\\\\')
    .replace(/\(/g, '\\(')
    .replace(/\)/g, '\\)')
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[–—]/g, '-')
    .replace(/…/g, '...')

// ---------------------------------------------------------------- montagem
const paginas = []
let conteudo = []
let y = ALTURA - MARGEM

function novaPagina() {
  if (conteudo.length) paginas.push(conteudo.join('\n'))
  conteudo = []
  y = ALTURA - MARGEM
}

function escrever(texto, { tamanho = 10, negrito = false, recuo = 0, espacoDepois = 6 } = {}) {
  const linhas = quebrar(texto, tamanho, negrito, UTIL - recuo)
  const alturaLinha = tamanho * 1.45

  for (const linha of linhas) {
    if (y - alturaLinha < MARGEM) novaPagina()
    conteudo.push(
      `BT /${negrito ? FONTES.negrito : FONTES.normal} ${tamanho} Tf ` +
        `1 0 0 1 ${MARGEM + recuo} ${y - tamanho} Tm (${escapar(linha)}) Tj ET`
    )
    y -= alturaLinha
  }
  y -= espacoDepois
}

function linhaHorizontal(espessura = 0.6) {
  if (y - 12 < MARGEM) novaPagina()
  conteudo.push(
    `${espessura} w 0.72 0.78 0.84 RG ${MARGEM} ${y} m ${LARGURA - MARGEM} ${y} l S`
  )
  y -= 14
}

function campoAssinatura(rotulo) {
  if (y - 46 < MARGEM) novaPagina()
  y -= 22
  conteudo.push(`0.6 w 0.1 0.13 0.22 RG ${MARGEM} ${y} m ${MARGEM + 320} ${y} l S`)
  y -= 12
  conteudo.push(
    `BT /${FONTES.normal} 8 Tf 1 0 0 1 ${MARGEM} ${y} Tm (${escapar(rotulo)}) Tj ET`
  )
  y -= 16
}

// ---------------------------------------------------------------- conteudo
const { tcle } = entrevistas

escrever(tcle.titulo, { tamanho: 16, negrito: true, espacoDepois: 4 })
linhaHorizontal(1)

for (const linha of tcle.identificacao) {
  escrever(`${linha.rotulo}: ${linha.valor}`, { tamanho: 9, espacoDepois: 3 })
}

y -= 6
linhaHorizontal()

for (const secao of tcle.secoes) {
  escrever(secao.titulo, { tamanho: 11, negrito: true, espacoDepois: 3 })
  escrever(secao.texto, { tamanho: 10, espacoDepois: 10 })
}

linhaHorizontal()
escrever('Declaração de consentimento', { tamanho: 11, negrito: true, espacoDepois: 3 })
escrever(tcle.declaracao, { tamanho: 10, espacoDepois: 18 })

for (const campo of tcle.campos) campoAssinatura(campo)

novaPagina()

// ---------------------------------------------------------------- estrutura
const objetos = []
const paginaIds = paginas.map((_, indice) => 4 + indice * 2)

objetos[1] = '<< /Type /Catalog /Pages 2 0 R >>'
objetos[2] =
  `<< /Type /Pages /Kids [${paginaIds.map((id) => `${id} 0 R`).join(' ')}] ` +
  `/Count ${paginas.length} >>`
objetos[3] =
  '<< /Font << /F1 << /Type /Font /Subtype /Type1 /BaseFont /Helvetica ' +
  '/Encoding /WinAnsiEncoding >> /F2 << /Type /Font /Subtype /Type1 ' +
  '/BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >> >> >>'

paginas.forEach((fluxo, indice) => {
  const idPagina = paginaIds[indice]
  objetos[idPagina] =
    `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${LARGURA} ${ALTURA}] ` +
    `/Resources 3 0 R /Contents ${idPagina + 1} 0 R >>`
  objetos[idPagina + 1] =
    `<< /Length ${Buffer.byteLength(fluxo, 'latin1')} >>\nstream\n${fluxo}\nendstream`
})

let pdf = '%PDF-1.4\n'
const posicoes = []

for (let i = 1; i < objetos.length; i += 1) {
  if (!objetos[i]) continue
  posicoes[i] = Buffer.byteLength(pdf, 'latin1')
  pdf += `${i} 0 obj\n${objetos[i]}\nendobj\n`
}

const inicioXref = Buffer.byteLength(pdf, 'latin1')
const total = objetos.length

pdf += `xref\n0 ${total}\n0000000000 65535 f \n`
for (let i = 1; i < total; i += 1) {
  pdf += posicoes[i]
    ? `${String(posicoes[i]).padStart(10, '0')} 00000 n \n`
    : '0000000000 65535 f \n'
}
pdf += `trailer\n<< /Size ${total} /Root 1 0 R >>\nstartxref\n${inicioXref}\n%%EOF\n`

mkdirSync(dirname(SAIDA), { recursive: true })
writeFileSync(SAIDA, Buffer.from(pdf, 'latin1'))

console.log(`TCLE gerado: ${SAIDA}`)
console.log(`${paginas.length} pagina(s), ${(Buffer.byteLength(pdf, 'latin1') / 1024).toFixed(1)} KB`)
