// Analise competitiva — alimenta a tabela em pages/imersao/AnaliseCompetitiva.jsx.
// Para adicionar um sistema, basta acrescentar um objeto com as mesmas chaves.

export const competitiva = [
  {
    sistema: 'ic.uff.br',
    tipo: 'Concorrente direto',
    positivos: ['Presença institucional oficial', 'Acesso ao e-mail da secretaria'],
    negativos: [
      'Não centraliza informações de salas',
      'Estrutura de navegação confusa',
      'Sem informações para visitantes',
    ],
    inspiracao: 'Oportunidade de centralização e hierarquia clara',
  },
  {
    sistema: 'idUFF',
    tipo: 'Concorrente direto',
    positivos: [
      'Quadro de horários com salas vinculadas',
      'Autenticação integrada com vínculo acadêmico',
    ],
    negativos: [
      'Interface pouco intuitiva',
      'Acesso restrito a alunos vinculados',
      'Não acessível a visitantes',
    ],
    inspiracao: 'Dados de sala já existem — falta exposição clara',
  },
  {
    sistema: 'Site EAU/UFF',
    tipo: 'Concorrente indireto',
    positivos: [
      'Estrutura de navegação mais clara que o IC',
      'Informações de contato visíveis',
    ],
    negativos: ['Também não centraliza salas', 'Design desatualizado'],
    inspiracao: 'Modelo de organização de seções por público-alvo',
  },
  {
    sistema: 'Site Eng. Mecânica/UFF',
    tipo: 'Concorrente indireto',
    positivos: ['Seção dedicada a calouros', 'Informações de secretaria na home'],
    negativos: ['Sem mapa ou localização de salas'],
    inspiracao: 'Seção de calouros como referência de onboarding',
  },
  {
    sistema: 'Google Maps (campus UFF)',
    tipo: 'Inspirador',
    positivos: [
      'Localização física precisa',
      'Familiar para qualquer usuário',
      'Funciona para visitantes externos',
    ],
    negativos: [
      'Não conhece a estrutura interna do IC',
      'Não tem informação de serviços administrativos',
    ],
    inspiracao: "Experiência de 'encontrar' como ponto de partida do design",
  },
]
