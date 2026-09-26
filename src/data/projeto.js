// Identidade e textos do projeto.
// Editar este arquivo muda o hero da Home e o rodape de todas as paginas.

export const projeto = {
  nome: 'UFFIND',
  // as duas metades do nome sao pintadas com cores diferentes no hero
  nomePartes: [{ texto: 'UFF', cor: 'azul' }, { texto: 'IND', cor: 'petroleo' }],
  mascote: 'Uffindinho',
  grupo: 'Grupo 3',

  // frase curta do hero: explica o projeto em uma linha
  tagline:
    'Um guia digital para encontrar salas, laboratórios e serviços administrativos do Instituto de Computação da UFF.',

  // 2 a 3 linhas sobre o que o Uffindinho resolve
  descricao:
    'Hoje, essas informações estão divididas entre o site do IC, o idUFF e o mural do primeiro andar. O UFFIND reúne tudo em um só lugar, com acesso simples para estudantes, visitantes, professores e demais servidores do Instituto.',

  // pergunta do projeto, usada na pagina de Imersao (How Might We)
  hmw: 'Como poderíamos ajudar quem estuda, trabalha ou visita o IC/UFF a encontrar, de forma rápida e clara, informações sobre salas e serviços administrativos?',

  // secao "Falando sobre o Uffindinho", no fim da pagina Equipe.
  // O mascote da Home leva ate aqui.
  sobreMascote: {
    titulo: 'Falando sobre o Uffindinho',
    paragrafos: [
      'Quem está perdido no IC não precisa de mais uma mensagem de erro genérica. Precisa de alguém que já passou por aquilo.',
      'O Uffindinho é o mascote do UFFIND. Ele aparece quando a sala não é encontrada, no primeiro acesso e naqueles momentos em que o sistema poderia simplesmente cuspir um código de erro e deixar a pessoa se virando.',
      'Ele também já procurou sala de número ímpar no lado par do corredor. Na UFF os dois lados seguem numerações diferentes, e é impressionante a quantidade de gente que descobre isso da pior forma possível: chegando atrasada na porta errada. O Uffindinho está ali porque o sistema foi feito por quem passou exatamente por isso.',
    ],
  },

  // intro da secao "O que estamos construindo"
  contextoConstrucao:
    'As direções abaixo saíram da fase de Imersão e serão detalhadas na Ideação.',

  // icone aceita: busca | servicos | acesso
  construindo: [
    {
      icone: 'busca',
      titulo: 'Busca de salas e espaços',
      texto:
        'Encontrar salas de aula, laboratórios e espaços do IC sem depender de login ou de perguntar a um colega.',
    },
    {
      icone: 'servicos',
      titulo: 'Serviços administrativos reunidos',
      texto:
        'Secretaria e coordenações no mesmo lugar, com horário de atendimento e forma de contato.',
    },
    {
      icone: 'acesso',
      titulo: 'Acesso aberto a visitantes',
      texto:
        'Funcionar para quem não tem vínculo com a UFF e nunca entrou no prédio, sem exigir autenticação do idUFF.',
    },
  ],
}

// Rodape institucional, repetido em todas as paginas.
// As imagens sao opcionais: se o arquivo nao existir, o rodape exibe
// apenas o texto, sem quebrar o layout.
export const instituicional = {
  disciplina: 'Projeto de Interface Humano-Computador',
  periodo: '2026.2',
  professora: 'Daniela Trevisan',
  logos: [
    { arquivo: 'assets/logos/uff.svg', alt: 'Universidade Federal Fluminense' },
    { arquivo: 'assets/logos/ic.png', alt: 'Instituto de Computação da UFF' },
  ],
}
