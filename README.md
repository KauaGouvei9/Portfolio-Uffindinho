# Uffindinho

Portfólio acadêmico do processo de design do **Grupo 3** da disciplina de
**Interação Humano-Computador**, Prof.ª Daniela Gorski Trevisan, Instituto de
Computação da UFF.

**Pergunta norteadora (HMW):** como poderíamos ajudar alunos e visitantes a
encontrar, de forma rápida e clara, informações sobre salas e serviços
administrativos no IC e no idUFF?

> ⚠️ **Este portfólio está em evolução ativa. A estrutura pode mudar após o
> feedback da professora.** Os arquivos em `src/data/` foram feitos justamente
> para absorver mudanças de conteúdo sem mexer em componente nenhum.

---

## 1. Como rodar localmente

Requer Node.js 18 ou superior.

```bash
npm install && npm run dev
```

O site abre em `http://localhost:5173`.

Para conferir o build de produção antes de publicar:

```bash
npm run build && npm run preview
```

## 2. Deploy no GitHub Pages

O `base` em `vite.config.js` é `'./'`, ou seja, relativo. Os assets funcionam em
qualquer nome de repositório, inclusive com maiúsculas, sem ajuste prévio.

```bash
npm run deploy
```

O comando roda o build e publica a pasta `dist/` na branch `gh-pages`. Depois,
no GitHub: *Settings → Pages → Source: Deploy from a branch → gh-pages / (root)*.

O site fica em `https://<usuario>.github.io/<nome-do-repositorio>/`.

As rotas usam `HashRouter` (`/#/imersao/hmw`), então recarregar qualquer página
funciona sem configuração de servidor.

## 3. Como substituir o Uffindinho

Troque `src/assets/uffindinho.png` mantendo o nome. O arquivo atual é um PNG com
fundo transparente, 560px de largura (o dobro dos 280px exibidos, para telas
retina) e 22KB. Mantenha o fundo transparente: um fundo branco vira um retângulo
visível sobre o papel azul-gelo do site.

A imagem fica em `src/assets/` e não em `public/` de propósito. Assim o Vite
gera um nome com hash a cada build (`uffindinho-3AMCa9en.png`), e o navegador
de quem já visitou o site nunca serve a versão antiga do cache.

Os favicons em `public/` (`favicon.ico`, `favicon-16x16.png`,
`favicon-32x32.png`, `apple-touch-icon.png` e `favicon-512x512.png`) são recortes
do mascote sem a palavra UFFINDINHO, que fica ilegível em 32px. Se trocar a
logo, gere os favicons de novo a partir dela.

## 4. Como atualizar o link do Miro

Edite `src/data/embeds.js`:

```js
export const embeds = {
  matrizCSD: 'https://miro.com/app/embed/XXXX/?pres=1',
  mapaEmpatia: null, // vira embed assim que colar a URL aqui
}
```

No Miro: *Share → Embed → copiar a URL que está no `src` do iframe*. Qualquer
valor que não seja uma URL `http(s)` (inclusive `null` ou o texto de placeholder)
faz o componente exibir o card "Conteúdo em preparação".

## 5. Como atualizar entregas e roadmap

O site **não exibe status nem datas**. Ele é um portfólio público, não um quadro
de acompanhamento interno. Material que ainda não existe aparece como estado
vazio dentro da própria página (ex.: o placeholder do Miro no Mapa de Empatia).

- Entregas da Imersão: `src/data/entregas.js`. A ordem do array define a ordem
  no grid da Home, no dropdown da navbar, no rodapé e na navegação
  Anterior/Próxima.
- Atividades do roadmap: `src/data/roadmap.js`, em `roadmap.grupos`. A
  numeração é contínua e calculada automaticamente, então basta adicionar ou
  remover itens da lista.
- Rodapé institucional (disciplina, período, professora, logos):
  `instituicional` em `src/data/projeto.js`.

## 6. Estrutura de pastas

```
public/assets/   → servidos direto: logos institucionais, TCLE em PDF, foto da cartolina
src/assets/      → imagens versionadas pelo Vite (a logo do mascote)
scripts/         → utilitários de linha de comando (geração do TCLE)
src/styles/      → global.css: tokens de cor, tipografia, reset e utilitários
src/components/  → componentes reutilizáveis, cada um com seu CSS Module
src/pages/       → uma página por rota; pages/imersao/ agrupa as entregas da fase
src/data/        → todo o conteúdo editável do site (textos, listas, links, status)
dist/            → build estático gerado pelo npm run build (não versionar)
```

## 7. Onde editar cada conteúdo

| Quero mudar | Arquivo |
| --- | --- |
| Nome, frase do hero, blocos "O que estamos construindo" e rodapé institucional | `src/data/projeto.js` |
| Quem / O que / Metas de Design do Formato do Problema | `src/data/hmw.js` |
| Atividades e texto do Roadmap | `src/data/roadmap.js` |
| Textos de método (CSD, Empatia, Competitiva, Questionário) | `src/data/metodos.js` |
| Tabela da análise competitiva | `src/data/competitiva.js` |
| Roteiro, perfis, TCLE e resultados das entrevistas | `src/data/entrevistas.js` |
| Integrantes, cursos e links de perfil | `src/data/equipe.js` |
| Links de embed do Miro e do formulário | `src/data/embeds.js` |
| Resultados e gráficos do questionário | `src/data/questionario.js` |
| Referências das certezas da Matriz CSD | `src/data/csd.js` |
| Campos e requisitos do Mapa de Empatia | `src/data/mapaEmpatia.js` |
| Ordem das entregas, rótulos e navegação Anterior/Próxima | `src/data/entregas.js` |

## 8. Decisões técnicas

- **React 18 + Vite**, com saída estática em `dist/` e sem backend.
- **CSS Modules** por componente; todas as cores e tamanhos vêm dos tokens em
  `:root` (`src/styles/global.css`). Nenhum `style` inline no JSX.
- **Framer Motion** apenas em dois lugares: a transição entre rotas
  (`AnimatePresence`) e um único reveal orquestrado no hero da Home. Não há
  animação de entrada por seção no scroll, e isso é proposital.
- **Acessibilidade**: contraste AA em todo o texto, foco visível único, drawer
  mobile com foco gerenciado e fechamento por `Esc`/clique fora, e
  `prefers-reduced-motion` respeitado tanto no CSS quanto no Framer
  (`reducedMotion: "user"`).

## 9. Pendências conhecidas

- `embeds.mapaEmpatia`: digitalizar a cartolina no Miro e colar a URL.
- Conclusões das entrevistas, em `src/data/entrevistas.js`.

O TCLE em PDF é gerado a partir do texto do site. Se mudar o termo em
`src/data/entrevistas.js`, rode `npm run tcle` para atualizar o arquivo.

## 10. Convenções de texto

- Nada de travessão. Use ponto, vírgula ou dois-pontos.
- O texto fala com quem visita o site, não com a equipe. Evite instruções
  internas, como orientações ao entrevistador.
- O nome do grupo aparece uma vez, na página Equipe. O resto do site fala do
  projeto.
