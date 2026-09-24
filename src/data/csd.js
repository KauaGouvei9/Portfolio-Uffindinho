// Matriz CSD: explicacao dos quadrantes e referencias das certezas.
//
// Cada certeza numerada no board tem uma fonte. Quando a fonte e uma pagina
// publica, o link aparece na pagina. Quando a verificacao foi presencial,
// o campo url fica vazio e o texto diz como a checagem foi feita.

export const quadrantes = [
  {
    id: 'certezas',
    titulo: 'Certezas',
    descricao:
      'Afirmações que podem ser sustentadas com evidência verificável: um documento, um sistema consultado ou uma fonte publicada. São as únicas que embasam decisões de projeto sem investigação adicional.',
    nota: 'Cada certeza do board é numerada e tem uma referência correspondente na lista abaixo.',
  },
  {
    id: 'suposicoes',
    titulo: 'Suposições',
    descricao:
      'O que se acredita ser verdade, mas ainda não foi confirmado. Aqui entram as impressões sobre o comportamento dos alunos que ninguém verificou. É a coluna de maior risco, porque essas impressões costumam ser tratadas como certezas.',
    nota: 'Boa parte destas foi confirmada ou descartada pelo questionário e pelas entrevistas.',
  },
  {
    id: 'duvidas',
    titulo: 'Dúvidas',
    descricao:
      'O que se sabe que não se sabe: perguntas em aberto sobre o contexto, sobre os usuários e sobre os sistemas existentes.',
    nota: 'As dúvidas alimentaram diretamente o roteiro da entrevista e as perguntas do questionário.',
  },
]

export const referencias = [
  {
    numero: 1,
    certeza: 'O quadro de horários está disponível no sistema da UFF.',
    fonte: 'Quadro de Horários da UFF',
    url: 'https://app.uff.br/graduacao/quadrodehorarios/',
    verificacao:
      'O sistema permite consultar turmas por disciplina, departamento, curso, período, turno e localidade. Ele também apresenta as coordenações de Ciência da Computação e de Sistemas de Informação.',
  },
  {
    numero: 2,
    certeza: 'As salas de Sistemas de Informação são informadas no mural do prédio.',
    fonte: 'Verificação presencial no primeiro andar do IC',
    url: null,
    verificacao:
      'Esta certeza foi confirmada no próprio prédio, e não por uma página pública. Por isso não há link: a evidência é a observação direta do mural pelos integrantes.',
  },
  {
    numero: 3,
    certeza:
      'A página oficial apresenta informações sobre os cursos e serviços do Instituto de Computação.',
    fonte: 'Graduação, Instituto de Computação da UFF',
    url: 'https://www.ic.uff.br/graduacao/',
    verificacao:
      'A página confirma que o Instituto oferece, entre outros, os cursos de Ciência da Computação, Sistemas de Informação e Tecnologia de Sistemas de Computação.',
  },
  {
    numero: 4,
    certeza: 'O Instituto de Computação fica no campus da Praia Vermelha, em Niterói.',
    fonte: 'Contato e localização do IC/UFF',
    url: 'https://www.ic.uff.br/contact-2/',
    verificacao:
      'O endereço informado é Av. Gal. Milton Tavares de Souza, s/nº, Campus da Praia Vermelha, Boa Viagem, Niterói, RJ.',
  },
  {
    numero: 5,
    certeza: 'É possível confirmar as salas diretamente com a secretaria ou por e-mail.',
    fonte: 'Contato do Instituto de Computação da UFF',
    url: 'https://www.ic.uff.br/contact-2/',
    verificacao:
      'A mesma página lista os contatos da secretaria administrativa, da graduação em Sistemas de Informação e do suporte técnico.',
  },
]

export const avisoSemReferencias =
  'A lista numerada das fontes que sustentam cada certeza será publicada nesta seção. As certezas já aparecem numeradas dentro do quadro do Miro acima.'
