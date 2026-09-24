// Entregas da fase de Imersao.
// Alimenta o grid da Home, o dropdown da Navbar, o rodape e a navegacao
// "Anterior / Proxima". A ordem do array e a ordem da navegacao.
//
// Sem campo de status: este e um portfolio publico, nao um quadro de
// acompanhamento. Material que ainda nao existe aparece como estado vazio
// dentro da propria pagina.

export const entregasImersao = [
  {
    id: 'hmw',
    nome: 'HMW',
    nomeCompleto: 'How Might We',
    rota: '/imersao/hmw',
    resumo: 'A pergunta que define o problema: quem, o que e as metas de design.',
  },
  {
    id: 'matriz-csd',
    nome: 'Matriz CSD',
    nomeCompleto: 'Matriz CSD',
    rota: '/imersao/matriz-csd',
    resumo: 'Desk research: certezas, suposições e dúvidas sobre o problema.',
  },
  {
    id: 'analise-competitiva',
    nome: 'Análise Competitiva',
    nomeCompleto: 'Análise Competitiva',
    rota: '/imersao/analise-competitiva',
    resumo: 'Nove sistemas comparados: diretos, indiretos e inspiradores.',
  },
  {
    id: 'mapa-empatia',
    nome: 'Mapa de Empatia',
    nomeCompleto: 'Mapa de Empatia',
    rota: '/imersao/mapa-empatia',
    resumo: 'O que o usuário diz, pensa, faz e sente, e os requisitos que saem daí.',
  },
  {
    id: 'entrevistas',
    nome: 'Entrevistas',
    nomeCompleto: 'Entrevistas',
    rota: '/imersao/entrevistas',
    resumo: 'Técnica qualitativa: roteiro, TCLE e método de análise.',
  },
  {
    id: 'questionario',
    nome: 'Questionário',
    nomeCompleto: 'Questionário',
    rota: '/imersao/questionario',
    resumo: 'Técnica quantitativa, aberta para resposta no Google Forms.',
  },
]
