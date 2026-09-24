// Mapa de Empatia: transcricao da cartolina produzida em sala, com o
// mascote UFFINDINHO no centro.
//
// As perguntas abaixo sao as que foram levadas impressas para a dinamica.
// Os itens de cada campo sao as respostas anotadas nos post-its.

export const mapaEmpatia = {
  metodo: [
    'O Mapa de Empatia organiza o que sabemos sobre o usuário em quatro campos: o que ele diz, o que pensa, o que faz e o que sente. Ele não descreve uma pessoa específica. Serve para manter a conversa sobre a interface no ponto de vista de quem usa.',
    'A dinâmica foi feita em sala, em cartolina, com uma a duas perguntas preparadas por campo. As perguntas foram dirigidas a quem já tinha passado pela dificuldade de encontrar uma sala ou um serviço no IC, e cada resposta virou um post-it no quadrante correspondente.',
  ],

  // foto da cartolina produzida em sala
  foto: {
    arquivo: 'assets/mapa-empatia-cartolina.jpg',
    alt: 'Cartolina do Mapa de Empatia produzida em sala, com o mascote Uffindinho desenhado no centro e os post-its dos campos Fala/Diz, Pensa, Faz e Sente ao redor.',
    legenda: 'A cartolina original, montada em sala. Os quatro campos estão transcritos logo abaixo.',
  },

  campos: [
    {
      id: 'diz',
      titulo: 'Diz',
      perguntas: [
        'O que você fala pros colegas quando não consegue achar uma sala ou setor no IC?',
      ],
      itens: [
        'Sem organização',
        'Bagunçado',
        'Reclamação',
        'Raiva',
        'Deslocado',
        'Falta informação',
        'Deveria ter mais divulgação',
        '"É UFF, né…"',
        '"Comento que sou lesado(a) de salas por ala e andar"',
        '"Todos os períodos é a mesma coisa…"',
        'Endereço da sala',
      ],
    },
    {
      id: 'pensa',
      titulo: 'Pensa',
      perguntas: [
        'O que passa pela sua cabeça quando você não sabe pra onde ir dentro do prédio?',
        'O que você acha que deveria existir pra isso ser mais fácil?',
      ],
      itens: [
        'Aplicativo ou sistema',
        'Disponibilidade do sinal',
        'Perder a chamada',
        'Atraso',
        'Desistir',
        'À deriva…',
        '"Vou para o bandejão…"',
      ],
    },
    {
      id: 'faz',
      titulo: 'Faz',
      perguntas: [
        'O que você faz hoje quando precisa achar uma sala ou serviço administrativo? Usa o site, o idUFF, pergunta pra alguém, olha o mural?',
      ],
      itens: [
        'Manda e-mail',
        'Pergunta ao porteiro',
        'Pergunta a um veterano',
        'Grupo de SI ou WhatsApp',
        'Procura o quadro de horários',
        'Pesquisa no site do departamento',
        'Vê o Classroom',
        'Pergunta para a primeira opção que aparece',
        'Espera alguém chegar',
      ],
    },
    {
      id: 'sente',
      titulo: 'Sente',
      perguntas: [
        'Como você se sente quando não consegue achar rápido o que precisa no IC?',
      ],
      itens: [
        'Perdido',
        'Desamparado',
        'Nervoso',
        'Preocupado',
        'Impaciente',
        'Cansado',
        'Tristeza',
        'Frustração',
        '"Se eu descobrir que não é aqui, sinto ódio…"',
        '"Sim, porque dá trabalho (preguiça)"',
      ],
    },
  ],

  // Requisitos derivados pelo grupo a partir dos campos acima.
  // origem = de qual campo o requisito foi extraido (rastreabilidade).
  requisitos: [
    {
      origem: 'Faz',
      requisito: 'A informação precisa se sustentar sozinha',
      justificativa:
        'Quatro das nove ações listadas dependem de outra pessoa: porteiro, veterano, grupo de WhatsApp e esperar alguém chegar. Uma solução que ainda exija esse intermediário não resolve o problema.',
    },
    {
      origem: 'Faz',
      requisito: 'Reunir em um ponto só o que hoje está espalhado',
      justificativa:
        'Para a mesma dúvida o aluno percorre e-mail, grupo do curso, site do departamento, quadro de horários e Classroom.',
    },
    {
      origem: 'Diz',
      requisito: 'Endereçar a sala por ala e andar, não só pelo código',
      justificativa:
        'O post-it "sou lesado(a) de salas por ala e andar" e a anotação "endereço da sala" mostram que saber o número não basta: falta a localização dentro do prédio.',
    },
    {
      origem: 'Pensa',
      requisito: 'Funcionar com sinal instável',
      justificativa:
        '"Disponibilidade do sinal" aparece como preocupação espontânea. A consulta acontece dentro do prédio, a caminho da sala.',
    },
    {
      origem: 'Pensa / Sente',
      requisito: 'Responder rápido, para uso com o relógio contra',
      justificativa:
        '"Perder a chamada" e "atraso" aparecem em Pensa; impaciência e nervosismo em Sente. A busca acontece sob pressão de tempo.',
    },
    {
      origem: 'Pensa / Faz',
      requisito: 'Nenhum caminho sem saída',
      justificativa:
        '"Desistir", "à deriva", "vou para o bandejão" e "espero alguém chegar" são desfechos de abandono. Toda tela precisa oferecer uma próxima ação, inclusive quando a busca não encontra nada.',
    },
    {
      origem: 'Diz',
      requisito: 'Organização e nomenclatura previsíveis',
      justificativa:
        '"Sem organização" e "bagunçado" são as reclamações mais diretas sobre os sistemas atuais.',
    },
    {
      origem: 'Diz',
      requisito: 'Atender também quem já conhece o prédio',
      justificativa:
        '"Todos os períodos é a mesma coisa" indica que a dificuldade não some com o tempo de curso. O resignado "é UFF, né" mostra que o problema virou rotina aceita, o que também explica a baixa cobrança por uma solução.',
    },
  ],
}
