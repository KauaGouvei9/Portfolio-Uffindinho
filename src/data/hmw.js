// Conteudo da pagina How Might We.
// A pergunta consolidada no fim da pagina vem de data/projeto.js (projeto.hmw).

export const formatoProblema = {
  // frase-formula exibida em destaque, com os campos preenchidos pela tabela
  formula: 'Como podemos ajudar [QUEM] a fazer [O QUE] de forma que [METAS DE DESIGN].',

  explicacao:
    'O How Might We, ou "Como poderíamos", é a técnica que transforma o que foi observado na Imersão em uma pergunta de projeto.',

  oQueE: [
    'O How Might We é uma técnica de definição de problema de design, criada na Procter & Gamble na década de 1970 e popularizada pela IDEO. Em vez de descrever a falha, como em "o aluno não encontra a sala", o problema é reescrito na forma de uma pergunta que já pressupõe a existência de uma solução ainda não decidida.',
    'A forma da pergunta é proposital. Ela é aberta, e não fechada, porque uma pergunta fechada admite uma resposta só e encerra a investigação antes da ideação. "Devemos fazer um mapa interativo do IC?" aceita apenas sim ou não, e já embute a solução no enunciado. A pergunta aberta mantém o meio em disputa, seja ele um site, um aplicativo ou uma sinalização física, e fixa somente o que importa: quem precisa ser atendido, o que essa pessoa precisa fazer e sob quais metas de design.',
  ],

  // texto que introduz a formula e a tabela dos tres campos
  introFormato:
    'O formato do problema separa a pergunta em três campos. Preencher os três antes de escrever a pergunta final é o que impede que a solução entre no enunciado.',

  quem: [
    'Alunos de graduação do IC (calouros e veteranos)',
    'Visitantes e usuários externos ao Instituto',
  ],

  oQue: [
    'Encontrar salas de aula, laboratórios e espaços do IC',
    'Localizar e contatar serviços administrativos (secretaria, coordenações)',
  ],

  metas: [
    'Rapidez e clareza na busca por informação, sem depender de terceiros',
    'Acesso funcionar igualmente bem para quem já conhece o prédio e para quem nunca esteve lá',
  ],
}
