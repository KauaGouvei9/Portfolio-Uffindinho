// Textos de metodo das paginas de Imersao.
// Regra: descrever o metodo e o estado real do material. Nao registrar
// achados ou numeros que o grupo ainda nao produziu.

export const metodos = {
  matrizCSD: {
    paragrafos: [
      'A Matriz CSD organiza o que já se sabe sobre um problema em três colunas: Certezas, o que foi verificado; Suposições, o que se acredita mas ainda não foi confirmado; e Dúvidas, o que precisa ser investigado.',
      'As suposições e as dúvidas registradas na matriz são o ponto de partida das técnicas seguintes. Cada uma delas precisa ser confirmada ou descartada pelas entrevistas e pelo questionário.',
    ],
    nota: 'Navegue pelo board usando o scroll e o zoom do Miro. Clique no ícone de expansão para ver em tela cheia.',
  },

  analiseCompetitiva: {
    paragrafos: [
      'A análise competitiva compara sistemas que já resolvem, bem ou mal, o mesmo problema do usuário. Ela evita que o projeto reinvente soluções já testadas e mostra onde ainda falta resposta.',
      'Para cada sistema foram registrados pontos positivos, pontos negativos e uma ideia aproveitável para o design futuro. É essa terceira coluna que liga a análise à fase de Ideação: cada linha da tabela deixa uma decisão de projeto em aberto.',
    ],
    categorias: {
      'Concorrente direto': 'mesmo objetivo e mesmo público que o UFFIND',
      'Concorrente indireto': 'resolvem parte do problema ou atendem um público vizinho',
      Inspirador: 'outro problema, mas com experiência de uso que vale importar',
    },
  },

  questionario: {
    paragrafos: [
      'O questionário é a parte quantitativa da Imersão. Enquanto a entrevista mostra em profundidade por que um comportamento acontece, o questionário mostra quantas pessoas passam pela mesma coisa.',
      'As perguntas foram formuladas a partir das suposições e das dúvidas registradas na Matriz CSD, de modo que cada resposta ajude a confirmar ou a descartar um item daquele board.',
    ],
    rotuloBotao: 'Responder o questionário',
    notaFormulario:
      'O formulário está aberto no Google Forms e pode ser respondido por qualquer aluno do IC.',
    planoAnalise:
      'As respostas serão tabuladas por frequência e apresentadas aqui em gráficos, comparando os canais que os alunos usam hoje para se localizar e os tipos de informação que eles não conseguem encontrar.',
    estadoVazioResultados:
      'A coleta de respostas está aberta. Os gráficos e a leitura dos resultados serão publicados nesta seção quando o questionário for encerrado.',
    planoCorrelacoes:
      'Além da frequência de cada resposta, serão cruzadas as perguntas que se relacionam. Por exemplo, tempo de curso contra dificuldade relatada, e canal utilizado contra tipo de informação procurada.',
    estadoVazioCorrelacoes:
      'Os cruzamentos entre perguntas dependem do fechamento da coleta e serão publicados junto com a análise.',
  },
}
