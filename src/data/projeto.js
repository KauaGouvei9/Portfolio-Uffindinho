// Identidade e textos institucionais do projeto.
// Editar este arquivo muda o hero da Home e o rodape de todas as paginas.

export const projeto = {
  nome: 'Uffindinho',
  grupo: 'Grupo 3',

  // frase curta do hero — explica o projeto em uma linha
  tagline: 'Um guia digital para encontrar salas, laboratórios e serviços administrativos do Instituto de Computação da UFF.',

  // 2 a 3 linhas: o que é o Uffindinho e o que ele resolve
  descricao:
    'Hoje essa informação está dividida entre o site do IC, o idUFF e o mural do primeiro andar — e nenhum deles atende quem não é aluno. O Uffindinho reúne tudo em um só lugar, aberto a alunos e visitantes.',

  // pergunta do projeto — usada na pagina de Imersao (Formato do Problema),
  // nao na Home
  hmw: 'Como poderíamos ajudar alunos e visitantes a encontrar, de forma rápida e clara, informações sobre salas e serviços administrativos no IC e no idUFF?',

  // intro da seção "O que estamos construindo"
  contextoConstrucao:
    'As direções abaixo saíram da fase de Imersão e serão detalhadas na Ideação.',

  // 2 a 3 blocos curtos. icone aceita: busca | servicos | acesso
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
    { arquivo: 'assets/logos/uff.png', alt: 'Universidade Federal Fluminense' },
    { arquivo: 'assets/logos/ic.png', alt: 'Instituto de Computação — UFF' },
  ],
}
