// Roadmap: o processo de design do projeto, sem datas e sem status.
// Substitui o antigo cronograma.js — um portfolio publico mostra o percurso
// metodologico, nao o calendario interno do grupo.

export const roadmap = {
  definicao: [
    'O roadmap é um diagrama, semelhante a um mapa, que organiza todas as atividades executadas durante o processo de design.',
    'Neste projeto seguimos a metodologia do Processo de Design Centrado no Humano, baseada nas etapas propostas pela organização IDEO, pioneira e mundialmente reconhecida na aplicação de design centrado nos usuários.',
  ],

  // Cada grupo vira uma coluna. A numeracao das atividades e continua
  // entre os grupos, como no diagrama de referencia da disciplina.
  grupos: [
    {
      id: 'imersao',
      titulo: 'Imersão',
      atividades: [
        'Definição do problema',
        'Matriz CSD',
        'Análise competitiva',
        'Mapa de empatia',
        'Entrevistas',
        'Questionário',
      ],
    },
    {
      id: 'ideacao',
      titulo: 'Ideação e Prototipação',
      atividades: [
        'Criação das personas',
        'Cenários-problema',
        'Modelo de tarefas',
        'Wireframes',
        'Protótipo navegável',
      ],
    },
    {
      id: 'avaliacao',
      titulo: 'Avaliação',
      atividades: [
        'Avaliação heurística',
        'Percurso cognitivo',
        'Teste de usabilidade',
      ],
    },
  ],
}

// Fases usadas pelo rodape e pelas paginas de fase ainda nao publicadas.
export const fases = [
  {
    id: 'imersao',
    nome: 'Imersão',
    rota: '/imersao/hmw',
    descricao: 'Entender o problema, o contexto e as pessoas envolvidas.',
  },
  {
    id: 'ideacao',
    nome: 'Ideação',
    rota: '/ideacao',
    descricao: 'Gerar e priorizar alternativas de solução.',
  },
  {
    id: 'prototipacao',
    nome: 'Prototipação',
    rota: '/prototipacao',
    descricao: 'Materializar as ideias em protótipos navegáveis.',
  },
  {
    id: 'avaliacao',
    nome: 'Avaliação',
    rota: '/avaliacao',
    descricao: 'Testar com usuários e medir a qualidade da interação.',
  },
]
