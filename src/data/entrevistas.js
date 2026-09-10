// Conteudo da pagina de Entrevistas: perfis, roteiro (accordion), TCLE e analise.

export const entrevistas = {
  metodo: [
    'A técnica escolhida é a entrevista semiestruturada individual: existe um roteiro definido, mas o entrevistador pode alterar a ordem das perguntas e aprofundar respostas inesperadas. Um roteiro rígido confirmaria apenas o que o grupo já supõe; uma conversa totalmente aberta não permitiria comparar participantes entre si.',
    'As perguntas são sobre situações já vividas ("conte uma situação em que...") e não sobre preferências hipotéticas. A gravação só começa após a assinatura do TCLE. O roteiro e o termo estão prontos; a coleta com participantes ainda não foi realizada.',
  ],

  modalidade: {
    tipo: 'Presencial',
    justificativa:
      'Única modalidade adotada. A entrevista será realizada no IC/UFF, favorecendo a observação do contexto físico — mural, corredores e espaços de circulação — e criando um ambiente natural para a conversa.',
  },

  coleta: [
    'Cada entrevista contará com dois integrantes do grupo: um entrevistador principal, responsável por conduzir o roteiro e manter o fluxo da conversa, e um observador, responsável por registrar anotações e percepções não verbais.',
    'Gravação de áudio, mediante autorização prévia no TCLE.',
    'Anotações escritas em tempo real pelo observador.',
    'Preenchimento de uma ficha de perfil antes da entrevista, com curso, semestre e tempo de contato com o IC.',
  ],

  // perfil unico, 6 participantes — calouros e veteranos dos tres cursos do IC
  perfis: [
    {
      titulo: 'Aluno de graduação do IC',
      participantes: 6,
      descricao:
        'Estudante matriculado em Ciência da Computação, Sistemas de Informação ou Inteligência Artificial e Ciência de Dados. O grupo incluirá calouros e veteranos, reunindo diferentes níveis de familiaridade com o campus e com os sistemas da universidade.',
    },
  ],

  analise: [
    {
      etapa: 1,
      titulo: 'Transcrição',
      descricao:
        'As gravações serão transcritas, de forma manual ou com apoio de ferramenta, gerando o material textual da análise.',
    },
    {
      etapa: 2,
      titulo: 'Codificação aberta',
      descricao:
        'Cada pesquisador lerá as transcrições e marcará trechos relevantes com rótulos livres, como "confusão com o site" e "usa colega como referência".',
    },
    {
      etapa: 3,
      titulo: 'Agrupamento temático',
      descricao:
        'Os códigos serão reunidos em categorias mais amplas, como "barreiras de acesso digital" e "estratégias informais de navegação".',
    },
    {
      etapa: 4,
      titulo: 'Análise de padrões',
      descricao:
        'Serão identificadas recorrências e diferenças entre participantes, incluindo contrastes entre calouros e veteranos.',
    },
    {
      etapa: 5,
      titulo: 'Síntese e relato',
      descricao:
        'Os achados alimentarão as personas, o Mapa de Empatia e os requisitos do projeto.',
    },
  ],

  roteiro: [
    {
      id: 'bloco-0',
      titulo: 'Bloco 0 — Abertura',
      duracao: '~3 min',
      texto:
        'Apresentar os membros presentes e a pesquisa brevemente. Explicar que não existem respostas certas ou erradas. Solicitar a assinatura do TCLE e a autorização para gravação de áudio. Iniciar a gravação após o consentimento.',
    },
    {
      id: 'bloco-1',
      titulo: 'Bloco 1 — Perfil do participante',
      duracao: '~5 min',
      perguntas: [
        { codigo: 'P1', texto: 'Qual é o seu curso e semestre atual? Há quanto tempo você frequenta o IC?' },
        { codigo: 'P2', texto: 'Com que frequência você precisa buscar informações sobre salas ou serviços administrativos no IC?' },
        { codigo: 'P3', texto: 'Quando precisa localizar uma sala ou saber sobre um serviço, qual é o seu primeiro passo?' },
      ],
    },
    {
      id: 'bloco-2',
      titulo: 'Bloco 2 — Experiência com os sistemas atuais',
      duracao: '~10 min',
      perguntas: [
        { codigo: 'P4', texto: 'Você conhece o site do IC (ic.uff.br)? Com que frequência o acessa?' },
        { codigo: 'P5', texto: 'Já usou o idUFF para ver o quadro de horários ou localizar salas? Como foi essa experiência?' },
        { codigo: 'P6', texto: 'Você já consultou o mural físico de salas no primeiro andar do IC? Ele ajudou?' },
        { codigo: 'P7', texto: 'Existe algum canal ou recurso que você usa bastante para esse tipo de informação, como grupos de WhatsApp, colegas ou professores? Por quê?' },
        { codigo: 'P8', texto: 'Conte uma situação em que teve dificuldade para encontrar uma sala ou acessar um serviço administrativo. Como você resolveu?' },
      ],
    },
    {
      id: 'bloco-3',
      titulo: 'Bloco 3 — Dificuldades e expectativas',
      duracao: '~8 min',
      perguntas: [
        { codigo: 'P9', texto: 'O que você considera mais confuso ou difícil nos sistemas e espaços atuais?' },
        { codigo: 'P10', texto: 'Se pudesse mudar uma coisa na forma como o IC disponibiliza informações sobre salas e serviços, o que seria?' },
        { codigo: 'P11', texto: 'Você prefere buscar essas informações online, presencialmente ou por outro meio? Por quê?' },
        { codigo: 'P12', texto: 'Existe alguma informação que você nunca consegue encontrar facilmente? Qual?' },
      ],
    },
    {
      id: 'bloco-4',
      titulo: 'Bloco 4 — Encerramento',
      duracao: '~2 min',
      texto:
        'Perguntar se o participante deseja acrescentar algo que não foi abordado. Agradecer a participação e reforçar o sigilo das informações. Encerrar a gravação.',
    },
  ],

  sondagem: [
    '"Você pode me dar um exemplo?"',
    '"Por que você acha isso?"',
    '"Como você se sentiu nessa situação?"',
    '"Há alguma situação recente em que isso aconteceu?"',
  ],

  tcle: {
    titulo: 'Termo de Consentimento Livre e Esclarecido',
    pesquisa: 'Análise da situação atual: como alunos de graduação buscam informações sobre salas e serviços no IC/UFF.',
    instituicao: 'Universidade Federal Fluminense (UFF) — Instituto de Computação (IC)',
    disciplina: 'Interação Humano-Computador — Prof.ª Daniela Gorski Trevisan',
    contato: 'giancarlos@id.uff.br',
    texto: [
      'Você está sendo convidado(a) a participar de uma pesquisa acadêmica conduzida por estudantes de graduação do IC/UFF como parte da disciplina de Interação Humano-Computador. O objetivo é compreender como alunos de graduação buscam informações sobre salas e serviços administrativos no Instituto de Computação, a fim de identificar dificuldades e oportunidades de melhoria nos canais de informação existentes.',
      'Sua participação consiste em uma entrevista individual, presencial, com duração estimada de 20 a 30 minutos. A atividade será realizada em local combinado no IC/UFF. Você responderá perguntas sobre sua experiência com os sistemas e espaços do Instituto. Não há respostas certas ou erradas: o que importa é a sua experiência real.',
      'A participação é voluntária. Você pode recusar o convite ou desistir a qualquer momento, sem prejuízo ou penalidade. Não há remuneração pelo envolvimento.',
      'Com a sua autorização, a entrevista poderá ser gravada em áudio para análise posterior. As gravações serão armazenadas de forma segura e usadas exclusivamente para fins acadêmicos desta disciplina. Caso prefira, a entrevista poderá ser conduzida apenas com anotações escritas.',
      'Sua identidade será mantida em sigilo. Os dados coletados serão anonimizados nos relatórios e trabalhos produzidos. Nenhuma informação pessoal identificável será divulgada publicamente.',
      'Esta pesquisa apresenta risco mínimo. Não envolve procedimentos físicos nem perguntas sensíveis de cunho pessoal. O benefício indireto é contribuir para a melhoria dos sistemas de informação do IC/UFF, beneficiando alunos atuais e futuros.',
    ],
    arquivo: '/assets/docs/TCLE_G3.pdf',
    rotulo: 'Baixar TCLE (PDF)',
  },

  resultados: {
    titulo: 'Resultados',
    estadoVazio:
      'As entrevistas ainda não foram realizadas. Os resultados serão publicados aqui após a coleta.',
  },
}