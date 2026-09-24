// Resultados do questionario aplicado no Google Forms.
// Fonte: relatorio "Analise das respostas do questionario de IHC",
// gerado a partir da planilha exportada do Forms (29 respostas).
//
// Os blocos marcados com base 27 usam menos respostas porque as duas
// primeiras chegaram antes de um ajuste em parte do formulario.

export const questionario = {
  amostra: {
    total: 29,
    paragrafos: [
      'A base tem 29 respostas, quase todas de alunos de graduação. Vinte e três são de Sistemas de Informação e cinco de Ciência da Computação. Uma resposta seguiu o caminho "outro" e ficou sem curso.',
      'A amostra é pequena e de conveniência, então os números orientam requisitos de projeto e não descrevem toda a comunidade do IC. As duas primeiras respostas chegaram antes de um ajuste em algumas perguntas: elas valem para os blocos compatíveis, e os blocos de serviços administrativos, preferências e prioridades usam 27 respostas.',
    ],
  },

  destaques: [
    { valor: '29', rotulo: 'respostas' },
    { valor: '55,2%', rotulo: 'buscam salas com frequência ou mais' },
    { valor: '55,2%', rotulo: 'encontram dificuldades com frequência ou mais' },
    { valor: '93,1%', rotulo: 'deram nota 5 de 5 para a utilidade da solução' },
  ],

  conclusao:
    'Os dados descrevem um problema de descoberta e de centralização da informação. As pessoas recorrem principalmente a colegas e a grupos de mensagem, embora prefiram uma solução digital oficial. O que consideram mais importante é calendário e avisos, localização das salas e horários das aulas.',

  secoes: [
    {
      id: 'frequencia',
      titulo: 'Com que frequência o problema aparece',
      intro:
        'Mais da metade da amostra (55,2%) procura informação sobre salas com frequência ou muita frequência, e a mesma proporção relata dificuldades nessa mesma faixa.',
      base: 29,
      unidade: '%',
      dados: [
        { rotulo: 'Busca informações sobre salas (frequentemente ou mais)', valor: 55.2 },
        { rotulo: 'Encontra dificuldades (frequentemente ou mais)', valor: 55.2 },
        { rotulo: 'Busca serviços administrativos (às vezes ou mais)', valor: 59.2, base: 27 },
      ],
      nota: 'A facilidade para localizar salas teve média 2,52 em uma escala de 1 a 5, com mediana 3. Quatorze pessoas (48,3%) deram nota 1 ou 2, e ninguém marcou 5.',
    },
    {
      id: 'canais-hoje',
      titulo: 'Como as pessoas procuram informação hoje',
      intro:
        'A busca é social antes de ser digital. Colegas e grupos de WhatsApp aparecem na frente de todos os canais oficiais.',
      base: 29,
      unidade: '%',
      destaqueAcima: 60,
      dados: [
        { rotulo: 'Colegas', valor: 86.2 },
        { rotulo: 'Grupos de WhatsApp', valor: 69.0 },
        { rotulo: 'Procura presencial pelo prédio', valor: 51.9, base: 27 },
        { rotulo: 'Mural físico', valor: 41.4 },
        { rotulo: 'idUFF', valor: 34.5 },
        { rotulo: 'Site do IC/UFF', valor: 10.3 },
        { rotulo: 'Professores', valor: 10.3 },
        { rotulo: 'Google', valor: 10.3 },
        { rotulo: 'Funcionários ou secretaria', valor: 3.7, base: 27 },
      ],
      nota: 'Quando a informação não é encontrada, 48,3% perguntam primeiro a um colega e 34,5% recorrem a um grupo de WhatsApp. Somadas, essas duas saídas cobrem 82,8% da amostra.',
    },
    {
      id: 'dificuldades',
      titulo: 'Principais dificuldades',
      intro:
        'A dificuldade dominante não é entender a informação, é descobrir onde ela está. A pergunta permitia várias escolhas, então os percentuais não somam 100%.',
      base: 29,
      unidade: '%',
      destaqueAcima: 55,
      dados: [
        { rotulo: 'Não sabia onde procurar', valor: 79.3 },
        { rotulo: 'A informação estava espalhada em lugares diferentes', valor: 58.6 },
        { rotulo: 'Precisei perguntar para outra pessoa', valor: 58.6 },
        { rotulo: 'O site ou sistema era difícil de navegar', valor: 55.2 },
        { rotulo: 'Tive dificuldade para localizar uma sala fisicamente', valor: 55.2 },
        { rotulo: 'Não encontrei a informação que precisava', valor: 51.7 },
        { rotulo: 'A informação estava desatualizada', valor: 48.3 },
        { rotulo: 'Tive dificuldade para descobrir onde fica determinado setor', valor: 44.8 },
        { rotulo: 'A informação estava pouco clara', valor: 41.4 },
      ],
      nota: 'Entre os serviços administrativos, os avaliados como difíceis ou muito difíceis foram suporte de TI (58,8%), apoio a laboratórios (52,6%), secretaria e direção (37,5%), coordenação de curso (25,0%) e portaria (20,8%). Essas bases são menores porque 37,0% não souberam avaliar o suporte de TI e 29,6% não souberam avaliar o apoio a laboratórios.',
    },
    {
      id: 'preferencias',
      titulo: 'O que as pessoas preferem',
      intro:
        'A preferência aponta para o digital oficial, o oposto do que acontece na prática.',
      base: 27,
      unidade: '%',
      destaqueAcima: 70,
      dados: [
        { rotulo: 'Por um aplicativo', valor: 81.5 },
        { rotulo: 'Por um site', valor: 77.8 },
        { rotulo: 'Pelo idUFF', valor: 66.7 },
        { rotulo: 'Por grupos ou canais de mensagem', valor: 55.6 },
        { rotulo: 'Por QR Codes espalhados pelo IC', valor: 40.7 },
        { rotulo: 'Por totens ou painéis físicos', valor: 29.6 },
        { rotulo: 'Prefiro perguntar presencialmente', valor: 14.8 },
      ],
      nota: 'O contraste mais forte está no site: 10,3% o usam com frequência ou sempre, mas 77,8% preferem acessar a informação por um site. O presencial faz o caminho inverso, com 51,9% procurando pelo prédio e só 14,8% preferindo esse meio.',
    },
    {
      id: 'prioridades',
      titulo: 'Prioridades para a solução',
      intro:
        'Calendário e avisos ficaram acima da própria localização das salas, o que empurra o projeto para além de um mapa.',
      base: 27,
      unidade: '%',
      destaqueAcima: 80,
      dados: [
        { rotulo: 'Calendário e avisos importantes', valor: 96.3 },
        { rotulo: 'Localização das salas de aula', valor: 88.9 },
        { rotulo: 'Horários das aulas', valor: 85.2 },
        { rotulo: 'Localização de laboratórios', valor: 77.8 },
        { rotulo: 'Horários de funcionamento das secretarias', valor: 74.1 },
        { rotulo: 'Como chegar a determinado local dentro do IC', valor: 70.4 },
        { rotulo: 'Localização de secretarias', valor: 55.6 },
        { rotulo: 'Informações sobre professores', valor: 48.1 },
        { rotulo: 'Contatos de setores administrativos', valor: 40.7 },
        { rotulo: 'Serviços oferecidos por cada setor', valor: 37.0 },
      ],
      nota: 'A utilidade percebida foi quase unânime: 27 de 29 pessoas deram nota 5 e as outras duas deram 4. Por quase não variar, essa pergunta confirma aceitação geral mas não explica diferenças entre respondentes.',
    },
  ],

  correlacoes: {
    intro:
      'Foram examinadas oito associações definidas antes da análise. O teste usado foi o Kendall tau-b, que respeita a natureza ordinal das escalas e os empates. Os valores de p vieram de 10.000 permutações e foram ajustados pelo procedimento de Benjamini-Hochberg. Duas associações permaneceram robustas depois da correção.',
    achados: [
      {
        titulo: 'Quanto mais se precisa procurar sala, mais dificuldade se relata',
        estatistica: 'tau-b = 0,557 · IC 95% 0,344 a 0,713 · q = 0,002',
        texto:
          'Associação positiva forte entre a necessidade de buscar informações sobre salas e a frequência de dificuldades.',
        sinal: 'positivo',
      },
      {
        titulo: 'Quem acha difícil localizar salas relata mais dificuldades',
        estatistica: 'tau-b = -0,480 · IC 95% -0,715 a -0,185 · q = 0,009',
        texto:
          'Associação negativa moderada a forte entre a nota de facilidade e a frequência de dificuldades. Notas menores acompanham relatos mais frequentes.',
        sinal: 'negativo',
      },
    ],
    naoConfirmado:
      'Não houve evidência de que mais tempo de convivência com o IC aumente a facilidade para localizar salas (tau-b = 0,051). O uso atual de site ou idUFF também não mostrou associação robusta com a preferência por esses canais. As associações descrevem relação entre respostas, não causalidade.',
  },

  abertas: {
    intro:
      'Sete respostas abertas tinham conteúdo substantivo. A codificação é exploratória e os temas podem se sobrepor.',
    base: 7,
    unidade: '%',
    dados: [
      { rotulo: 'Centralização e integração', valor: 57.1 },
      { rotulo: 'Interface digital', valor: 42.9 },
      { rotulo: 'Orientação e localização', valor: 42.9 },
      { rotulo: 'Atualização e confiabilidade', valor: 28.6 },
      { rotulo: 'Personalização e apoio a calouros', valor: 28.6 },
    ],
    nota: 'Aparecem ainda menções isoladas a mudanças de sala durante o período e à divulgação de eventos e atividades.',
  },

  requisitos: [
    { nome: 'Busca centralizada', implicacao: 'Um ponto único de entrada para salas, horários, avisos e serviços.' },
    { nome: 'Orientação espacial', implicacao: 'Mapa por blocos, rotas internas e identificação clara das salas.' },
    { nome: 'Atualização', implicacao: 'Estado da informação, avisos e mudanças de sala com data visível.' },
    { nome: 'Integração', implicacao: 'Relacionar turma, horário e sala ao contexto acadêmico do estudante.' },
    { nome: 'Acesso móvel', implicacao: 'Interface responsiva ou aplicativo, com QR codes apenas como apoio.' },
    { nome: 'Onboarding', implicacao: 'Guias curtos para calouros, sem esconder funções de quem já tem prática.' },
  ],

  limitacoes:
    'A amostra é pequena, de conveniência e concentrada em alunos de graduação, sobretudo de Sistemas de Informação. As escalas são ordinais, os campos abertos somam apenas sete respostas substantivas e as associações não estabelecem causalidade. Os resultados servem para orientar requisitos e novas avaliações de usabilidade.',

  fonte: 'Planilha exportada do Google Forms, com 29 respostas. Semente das reamostragens: 20260923.',
}
