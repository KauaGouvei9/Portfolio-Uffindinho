// Analise competitiva: alimenta a tabela em pages/imersao/AnaliseCompetitiva.jsx.
//
// origem: 'documento'  = veio da analise registrada pelo grupo
//         'desk'       = levantado por desk research sobre sistemas publicos
// O campo origem nao aparece na tela. Serve para o grupo saber o que precisa
// revisar antes da entrega.

export const justificativaEscolha = [
  'A seleção partiu do problema do usuário. Procuramos sistemas que já respondem à pergunta "onde fica e como eu chego" dentro de um campus ou de um prédio grande.',
  'Os dois primeiros concorrentes diretos são os sistemas que o aluno do IC já tem à mão hoje: o site do Instituto e o idUFF. Eles definem a régua real, porque é com eles que a solução vai ser comparada no dia a dia. Em seguida entram guias e mapas de outras universidades, que mostram como o mesmo problema foi resolvido em contextos institucionais parecidos, com restrições semelhantes de orçamento e de acesso a dados acadêmicos.',
  'Como concorrentes indiretos entraram sites de outras unidades da UFF, que organizam bem a informação mas não tratam de salas, e a combinação de mural físico com grupos de WhatsApp. Essa combinação informal é o que hoje realmente resolve o problema, segundo o questionário, e por isso é a referência a ser superada.',
  'Os inspiradores não competem com o projeto. Eles definem o padrão de experiência que as pessoas já conhecem quando precisam se localizar em ambiente fechado.',
]

export const competitiva = [
  {
    sistema: 'ic.uff.br',
    tipo: 'Concorrente direto',
    origem: 'documento',
    positivos: ['Presença institucional oficial', 'Acesso ao e-mail da secretaria'],
    negativos: [
      'Não centraliza informações de salas',
      'Estrutura de navegação confusa',
      'Sem informações para visitantes',
    ],
    ideiaDesign: 'Oportunidade de centralização e hierarquia clara',
  },
  {
    sistema: 'idUFF',
    tipo: 'Concorrente direto',
    origem: 'documento',
    positivos: [
      'Quadro de horários com salas vinculadas',
      'Autenticação integrada com vínculo acadêmico',
    ],
    negativos: [
      'Interface pouco intuitiva',
      'Acesso restrito a alunos vinculados',
      'Não acessível a visitantes',
    ],
    ideiaDesign: 'Os dados de sala já existem. Falta exposição clara',
  },
  {
    sistema: 'Guia USP',
    tipo: 'Concorrente direto',
    origem: 'desk',
    positivos: [
      'Aplicativo oficial que reúne serviços da universidade em um só lugar',
      'Mapa do campus integrado ao restante dos serviços',
      'Disponível nas lojas de aplicativo, sem depender do portal acadêmico',
    ],
    negativos: [
      'Escala de campus, com pouca profundidade dentro de cada prédio',
      'Boa parte das funções exige login institucional',
      'Não resolve a identificação de sala por ala e andar',
    ],
    ideiaDesign: 'Reunir serviços e localização no mesmo produto, em vez de sistemas separados',
  },
  {
    sistema: 'Mapas da UnB',
    tipo: 'Concorrente direto',
    origem: 'desk',
    positivos: [
      'Mapa oficial do campus aberto, sem exigir vínculo',
      'Busca por prédio e por unidade acadêmica',
    ],
    negativos: [
      'Orientação para entre prédios, não para dentro deles',
      'Não integra horário de aula com o espaço',
    ],
    ideiaDesign: 'Acesso aberto como padrão, com busca por nome do espaço',
  },
  {
    sistema: 'Mapa Interativo da U.Porto',
    tipo: 'Concorrente direto',
    origem: 'desk',
    positivos: [
      'Mapa interativo com filtro por tipo de espaço e por serviço',
      'Funciona no navegador, sem instalar nada',
      'Atende visitante externo sem autenticação',
    ],
    negativos: [
      'Depende de uma base de dados de espaços bem mantida',
      'Interface densa para quem só quer achar uma sala rápido',
    ],
    ideiaDesign: 'Filtrar por tipo de espaço, como laboratório ou secretaria',
  },
  {
    sistema: 'Site EAU/UFF',
    tipo: 'Concorrente indireto',
    origem: 'documento',
    positivos: [
      'Estrutura de navegação mais clara que a do IC',
      'Informações de contato visíveis',
    ],
    negativos: ['Também não centraliza salas', 'Design desatualizado'],
    ideiaDesign: 'Modelo de organização de seções por público-alvo',
  },
  {
    sistema: 'Site Eng. Mecânica/UFF',
    tipo: 'Concorrente indireto',
    origem: 'documento',
    positivos: ['Seção dedicada a calouros', 'Informações de secretaria na home'],
    negativos: ['Sem mapa ou localização de salas'],
    ideiaDesign: 'Seção de calouros como referência de onboarding',
  },
  {
    sistema: 'Mural físico e grupos de WhatsApp',
    tipo: 'Concorrente indireto',
    origem: 'desk',
    positivos: [
      'É o que as pessoas realmente usam: 86,2% recorrem a colegas e 69,0% a grupos',
      'Resposta rápida e já adaptada ao contexto de quem pergunta',
      'Não exige login, instalação nem aprendizado',
    ],
    negativos: [
      'Depende de outra pessoa estar disponível e saber a resposta',
      'A informação não fica registrada, então a mesma dúvida se repete a cada período',
      'Ninguém garante que a resposta está atualizada',
      'Deixa de fora quem não está no grupo, principalmente calouro e visitante',
    ],
    ideiaDesign: 'Entregar a velocidade da resposta do colega, com a confiabilidade da fonte oficial',
  },
  {
    sistema: 'Wayfinding indoor comercial',
    tipo: 'Concorrente indireto',
    origem: 'desk',
    positivos: [
      'Resolve orientação dentro de prédios grandes, que é o mesmo problema espacial',
      'Linguagem visual consolidada, com setas, blocos e cores por setor',
    ],
    negativos: [
      'Custo de implantação e manutenção fora da realidade de um instituto público',
      'Pensado para quem circula sem pressa, não para quem vai perder a chamada',
    ],
    ideiaDesign: 'Sinalização por bloco e andar, aplicada à identificação das salas',
  },
  {
    sistema: 'Google Maps no campus da UFF',
    tipo: 'Inspirador',
    origem: 'documento',
    positivos: [
      'Localização física precisa',
      'Familiar para qualquer usuário',
      'Funciona para visitantes externos',
    ],
    negativos: [
      'Não conhece a estrutura interna do IC',
      'Não tem informação de serviços administrativos',
    ],
    ideiaDesign: 'A experiência de encontrar como ponto de partida do design',
  },
  {
    sistema: 'Google Indoor Maps',
    tipo: 'Inspirador',
    origem: 'desk',
    positivos: [
      'Mostra andares dentro de um mesmo prédio, com troca de nível',
      'Mantém a mesma interface que a pessoa já usa na rua',
    ],
    negativos: [
      'Cobertura limitada a locais mapeados por parceiros',
      'Nenhum instituto da UFF está mapeado nesse nível',
    ],
    ideiaDesign: 'Seletor de andar como elemento central da navegação espacial',
  },
  {
    sistema: 'iBeacons em shoppings',
    tipo: 'Inspirador',
    origem: 'desk',
    positivos: [
      'Posicionamento dentro do prédio, onde o GPS não alcança',
      'Consegue dizer onde a pessoa está, e não só onde fica o destino',
    ],
    negativos: [
      'Exige hardware instalado e manutenção contínua',
      'Depende de aplicativo instalado e de bluetooth ligado',
    ],
    ideiaDesign: 'A pergunta útil é "onde eu estou agora", não apenas "onde fica a sala"',
  },
]
