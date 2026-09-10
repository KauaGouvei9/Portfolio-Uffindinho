# Uffindinho — Portfólio de IHC · Grupo 3 · UFF 2025

Portfólio acadêmico do processo de design do **Grupo 3** da disciplina de
**Interação Humano-Computador** (Prof.ª Daniela Gorski Trevisan — Instituto de
Computação, UFF).

**Pergunta norteadora (HMW):** como poderíamos ajudar alunos e visitantes a
encontrar, de forma rápida e clara, informações sobre salas e serviços
administrativos no IC e no idUFF?

> ⚠️ **Este portfólio está em evolução ativa — estrutura sujeita a ajustes após
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

O repositório precisa se chamar **`portfolio-uffindinho`** — é o valor de `base`
em `vite.config.js`. Se o nome do repositório for outro, altere lá primeiro,
senão o CSS e o JS não carregam no Pages.

```bash
npm run deploy
```

O comando roda o build e publica a pasta `dist/` na branch `gh-pages`. Depois,
no GitHub: *Settings → Pages → Source: Deploy from a branch → gh-pages / (root)*.

O site fica em `https://<usuario>.github.io/portfolio-uffindinho/`.

As rotas usam `HashRouter` (`/#/imersao/hmw`), então recarregar qualquer página
funciona sem configuração de servidor.

## 3. Como substituir o Uffindinho

Coloque a imagem em `public/assets/uffindinho.png` (mesmo nome). Enquanto o
arquivo não existir, o hero mostra automaticamente um placeholder com o ícone de
localização — o layout nunca quebra.

## 4. Como atualizar o link do Miro

Edite `src/data/embeds.js`:

```js
export const embeds = {
  matrizCSD: 'https://miro.com/app/embed/XXXX/?pres=1',
  mapaEmpatia: null, // vira embed assim que colar a URL aqui
  analiseCompetitiva: null, // não usa Miro — é uma tabela HTML
}
```

No Miro: *Share → Embed → copiar a URL que está no `src` do iframe*. Qualquer
valor que não seja uma URL `http(s)` (inclusive `null` ou o texto de placeholder)
faz o componente exibir o card "Conteúdo em preparação".

## 5. Como atualizar entregas e roadmap

O site **não exibe status nem datas** — é um portfólio público, não um quadro
de acompanhamento interno. Material que ainda não existe aparece como estado
vazio dentro da própria página (ex.: o placeholder do Miro no Mapa de Empatia).

- Entregas da Imersão: `src/data/entregas.js`. A ordem do array define a ordem
  no grid da Home, no dropdown da navbar, no rodapé e na navegação
  Anterior/Próxima.
- Atividades do roadmap: `src/data/roadmap.js`, em `roadmap.grupos`. A
  numeração é contínua e calculada automaticamente — basta adicionar ou remover
  itens da lista.
- Rodapé institucional (disciplina, período, professora, logos):
  `instituicional` em `src/data/projeto.js`.

## 6. Estrutura de pastas

```
public/assets/   → imagens e PDFs servidos direto (uffindinho.png, logos/, docs/)
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
| Links de embed do Miro | `src/data/embeds.js` |
| Ordem das entregas, rótulos e navegação Anterior/Próxima | `src/data/entregas.js` |

## 8. Decisões técnicas

- **React 18 + Vite**, saída estática em `dist/` — sem backend.
- **CSS Modules** por componente; todas as cores e tamanhos vêm dos tokens em
  `:root` (`src/styles/global.css`). Nenhum `style` inline no JSX.
- **Framer Motion** apenas em dois lugares: a transição entre rotas
  (`AnimatePresence`) e um único reveal orquestrado no hero da Home. Não há
  animação de entrada por seção no scroll — é proposital.
- **Acessibilidade**: contraste AA em todo o texto, foco visível único, drawer
  mobile com foco gerenciado e fechamento por `Esc`/clique fora, e
  `prefers-reduced-motion` respeitado tanto no CSS quanto no Framer
  (`reducedMotion: "user"`).

## 9. Pendências conhecidas

- `public/assets/uffindinho.png` — imagem do mascote ainda não incluída.
- `public/assets/logos/uff.png` e `logos/ic.png` — logos do rodapé institucional.
  Sem os arquivos, o rodapé mostra apenas o texto, sem imagem quebrada.
- `public/assets/docs/TCLE_G3.pdf` — PDF do termo de consentimento.
- `embeds.matrizCSD` — colar a URL de embed do board.
- `embeds.mapaEmpatia` — digitalizar o mapa feito em cartolina e publicar o board.
- Entrevistas — realizar a coleta e publicar os resultados (`src/data/entrevistas.js`).
- Link do questionário — hoje o botão está desabilitado por design.
