// Entrevista semiestruturada: tecnica qualitativa da Imersao.
// Conteudo transcrito do documento "Consultoria 1 - G3: Analise da Situacao
// Atual". Ao atualizar aquele documento, atualize este arquivo junto.

export const entrevistas = {
  tecnica: {
    nome: 'Entrevista semiestruturada individual',
    paragrafos: [
      'A entrevista semiestruturada combina perguntas planejadas com liberdade para aprofundar tópicos que surjam durante a conversa. Segundo Barbosa e Silva (cap. 5), ela permite coletar informações ricas e individualizadas, e é adequada quando é preciso compreender experiências, dificuldades e expectativas dos usuários em relação a um sistema.',
      'No contexto deste projeto, a técnica foi escolhida porque o problema envolve experiências distintas entre alunos de cursos e períodos diferentes. Um roteiro flexível permite comparar situações recorrentes e, ao mesmo tempo, explorar particularidades relatadas por cada participante.',
    ],
    referencia: 'BARBOSA, S. D. J.; SILVA, B. S. Interação Humano-Computador. Cap. 5.',
  },

  objetivo: {
    geral:
      'Compreender como alunos de graduação buscam informações sobre salas e serviços administrativos no IC/UFF, identificando dificuldades, estratégias adotadas e lacunas nos canais digitais e físicos atualmente disponíveis.',
    especificos: [
      'Mapear os caminhos percorridos pelos alunos para localizar salas e secretarias.',
      'Identificar pontos de confusão ou frustração nos sistemas existentes, como o site do IC, o idUFF e o mural físico.',
      'Levantar necessidades não atendidas que possam orientar o design da solução.',
    ],
  },

  perfil: {
    intro:
      'O estudo considera um único perfil de participante, definido a partir das personas e dos contextos de uso identificados na Matriz CSD e na Análise Competitiva.',
    nome: 'Aluno de graduação do IC/UFF',
    descricao:
      'Estudante matriculado em Ciência da Computação, Sistemas de Informação e Inteligência Artificial/Ciência de Dados. A amostra inclui calouros e veteranos, reunindo diferentes níveis de familiaridade com o campus e com os sistemas da universidade.',
    quantidade: 6,
  },

  modalidade: {
    nome: 'Presencial',
    criterio:
      'A entrevista acontece no próprio IC. Isso permite observar o contexto físico onde o problema aparece, como o mural, os corredores e os espaços de circulação, e deixa a conversa mais natural.',
  },

  coleta: {
    intro:
      'Cada entrevista contará com dois integrantes do grupo: um entrevistador principal, responsável por conduzir o roteiro e manter o fluxo da conversa, e um observador, responsável por registrar anotações e percepções não verbais. Os dados serão coletados por:',
    itens: [
      'Gravação de áudio, mediante autorização prévia no TCLE.',
      'Anotações escritas em tempo real pelo observador.',
      'Preenchimento de uma ficha de perfil antes da entrevista, com curso, semestre e tempo de contato com o IC.',
    ],
  },

  analise: {
    intro: 'Após a coleta, os dados serão analisados qualitativamente nas etapas a seguir.',
    etapas: [
      {
        titulo: 'Transcrição',
        texto:
          'As gravações serão transcritas, de forma manual ou com apoio de ferramenta, gerando o material textual da análise.',
      },
      {
        titulo: 'Codificação aberta',
        texto:
          'Cada pesquisador lerá as transcrições e marcará trechos relevantes com rótulos livres, como "confusão com o site" e "usa colega como referência".',
      },
      {
        titulo: 'Agrupamento temático',
        texto:
          'Os códigos serão reunidos em categorias mais amplas, como "barreiras de acesso digital" e "estratégias informais de navegação".',
      },
      {
        titulo: 'Análise de padrões',
        texto:
          'Serão identificadas recorrências e diferenças entre participantes, incluindo contrastes entre calouros e veteranos.',
      },
      {
        titulo: 'Síntese e relato',
        texto:
          'Os achados alimentarão as personas, o Mapa de Empatia e os requisitos do projeto.',
      },
    ],
  },

  infoRoteiro: {
    duracao: '20 a 30 minutos',
    materiais: 'Roteiro impresso, ficha de perfil e gravador ou celular.',
  },

  roteiro: [
    {
      id: 'bloco-0',
      numero: 0,
      nome: 'Abertura e apresentação',
      duracao: '~3 min',
      topicos: [
        'Apresentar os membros presentes e a pesquisa brevemente.',
        'Explicar que não existem respostas certas ou erradas.',
        'Solicitar a assinatura do TCLE e a autorização para gravação de áudio.',
        'Iniciar a gravação após o consentimento.',
      ],
    },
    {
      id: 'bloco-1',
      numero: 1,
      nome: 'Perfil do participante',
      duracao: '~5 min',
      perguntas: [
        { codigo: 'P1', texto: 'Qual é o seu curso e semestre atual? Há quanto tempo você frequenta o IC?' },
        { codigo: 'P2', texto: 'Com que frequência você precisa buscar informações sobre salas ou serviços administrativos no IC?' },
        { codigo: 'P3', texto: 'Quando precisa localizar uma sala ou saber sobre um serviço, qual é o seu primeiro passo?' },
      ],
    },
    {
      id: 'bloco-2',
      numero: 2,
      nome: 'Experiência com os sistemas atuais',
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
      numero: 3,
      nome: 'Dificuldades e expectativas',
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
      numero: 4,
      nome: 'Encerramento',
      duracao: '~2 min',
      topicos: [
        'Perguntar se o participante deseja acrescentar algo que não foi abordado.',
        'Agradecer a participação e reforçar o sigilo das informações.',
        'Encerrar a gravação.',
      ],
    },
  ],

  tcle: {
    titulo: 'Termo de Consentimento Livre e Esclarecido',
    intro:
      'Documento lido e assinado por cada participante antes do início da gravação.',
    identificacao: [
      {
        rotulo: 'Título da pesquisa',
        valor:
          'Análise da situação atual: como alunos de graduação buscam informações sobre salas e serviços no IC/UFF.',
      },
      { rotulo: 'Instituição', valor: 'Universidade Federal Fluminense, Instituto de Computação' },
      { rotulo: 'Disciplina', valor: 'Interação Humano-Computador, Prof.ª Daniela Gorski Trevisan' },
      {
        rotulo: 'Pesquisadores',
        valor:
          'Kauã Gouveia de Carvalho, Fabricio de Freitas Rivas, Kaua Muller Campista, Kayo Vianna Cipriano, Giancarlo Pereira dos Santos',
      },
      { rotulo: 'Contato', valor: 'giancarlos@id.uff.br' },
    ],
    secoes: [
      {
        titulo: 'O que é esta pesquisa?',
        texto:
          'Você está sendo convidado(a) a participar de uma pesquisa acadêmica conduzida por estudantes de graduação do IC/UFF como parte da disciplina de Interação Humano-Computador. O objetivo é compreender como alunos de graduação buscam informações sobre salas e serviços administrativos no Instituto de Computação, a fim de identificar dificuldades e oportunidades de melhoria nos canais de informação existentes.',
      },
      {
        titulo: 'O que envolve a participação?',
        texto:
          'Sua participação consiste em uma entrevista individual, presencial, com duração estimada de 20 a 30 minutos. A atividade será realizada em local combinado no IC/UFF. Você responderá perguntas sobre sua experiência com os sistemas e espaços do Instituto. Não há respostas certas ou erradas: o que importa é a sua experiência real.',
      },
      {
        titulo: 'A participação é voluntária?',
        texto:
          'Sim. Você pode recusar o convite ou desistir a qualquer momento, sem prejuízo ou penalidade. Não há remuneração pelo envolvimento.',
      },
      {
        titulo: 'Os dados serão gravados?',
        texto:
          'Com a sua autorização, a entrevista poderá ser gravada em áudio para análise posterior. As gravações serão armazenadas de forma segura e usadas exclusivamente para fins acadêmicos desta disciplina. Caso prefira, a entrevista poderá ser conduzida apenas com anotações escritas.',
      },
      {
        titulo: 'Sigilo e confidencialidade',
        texto:
          'Sua identidade será mantida em sigilo. Os dados coletados serão anonimizados nos relatórios e trabalhos produzidos. Nenhuma informação pessoal identificável será divulgada publicamente.',
      },
      {
        titulo: 'Riscos e benefícios',
        texto:
          'Esta pesquisa apresenta risco mínimo. Não envolve procedimentos físicos nem perguntas sensíveis de cunho pessoal. O benefício indireto é contribuir para a melhoria dos sistemas de informação do IC/UFF, beneficiando alunos atuais e futuros.',
      },
    ],
    declaracao:
      'Li e compreendi as informações acima. Tive a oportunidade de fazer perguntas e minhas dúvidas foram esclarecidas. Concordo em participar desta pesquisa de forma voluntária, sabendo que posso retirar meu consentimento a qualquer momento, sem prejuízo.',
    campos: [
      'Nome do participante',
      'Data',
      'Assinatura',
      'Autoriza gravação de áudio? ( ) Sim ( ) Não',
    ],
    arquivo: 'assets/docs/TCLE_G3.pdf',
    rotulo: 'Baixar TCLE (PDF)',
    // O PDF e gerado a partir deste mesmo objeto por scripts/gerar-tcle.mjs.
    // Depois de mudar o texto acima, rode: node scripts/gerar-tcle.mjs
    arquivoDisponivel: true,
    avisoSemArquivo:
      'A versão em PDF para impressão será disponibilizada aqui. O texto integral do termo está reproduzido acima.',
  },

  resultados: {
    titulo: 'Conclusões',
    intro:
      'Os achados das entrevistas, e os requisitos de design que eles geram, serão publicados nesta seção ao fim da análise.',
    estadoVazio:
      'As entrevistas ainda estão em andamento. Os temas, os padrões e as conclusões que vão guiar a Ideação serão publicados aqui.',
  },
}
