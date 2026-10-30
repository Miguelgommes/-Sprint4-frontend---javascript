export const menu = [
  { id: 'inicio', label: 'Início' },
  { id: 'solucao', label: 'A Solução' },
  { id: 'publico', label: 'Público-Alvo' },
  { id: 'galeria', label: 'Galeria' },
  { id: 'equipe', label: 'Nossa Equipe' },
  { id: 'contato', label: 'Contato' },
]

export const solucao = [
  {
    titulo: 'O problema',
    texto:
      'Muitos estudantes têm dificuldade em transformar o conteúdo das aulas, livros e anotações em material de estudo organizado, além de não saberem identificar quais assuntos precisam revisar com mais atenção.',
  },
  {
    titulo: 'Como a solução funciona',
    texto:
      'O JOVI STUDY CAM é a câmera do celular com uma IA integrada: o estudante tira uma foto de um conteúdo (página de livro, slide, anotação, quadro), a IA identifica o assunto, gera automaticamente um resumo e cria um quiz sobre o tema. Ao final do quiz, o estudante recebe um retorno com seus pontos fortes e fracos.',
  },
]

export const beneficios = [
  'Transforma qualquer conteúdo fotografado em material de estudo em segundos;',
  'Gera resumos automáticos, economizando tempo de leitura e organização;',
  'Cria quizzes personalizados para fixação do conteúdo;',
  'Mostra pontos fortes e fracos, ajudando o estudante a focar no que realmente precisa revisar.',
]

export const publico = [
  {
    titulo: 'Quem são',
    texto:
      'Estudantes do ensino médio e universitários que estudam por conta própria ou revisam conteúdo para provas.',
  },
  {
    titulo: 'Necessidades',
    texto:
      'Pessoas com pouco tempo disponível, que precisam organizar o conteúdo estudado de forma rápida e eficiente.',
  },
  {
    titulo: 'Por que é relevante',
    texto:
      'Grande parte dos estudantes ainda resume conteúdo manualmente e não sabe identificar suas próprias dificuldades.',
  },
  {
    titulo: 'Como ajuda',
    texto:
      'O JOVI STUDY CAM automatiza o resumo e a revisão, indicando exatamente quais pontos o estudante precisa reforçar.',
  },
]

export const galeria = [
  { src: '/images/escaneamento-conteudo.png', alt: 'Câmera processando e escaneando um conteúdo de estudo', legenda: 'Escaneando o conteúdo' },
  { src: '/images/resumo-ia.png', alt: 'Tela com o resumo gerado automaticamente pela IA', legenda: 'Resumo gerado pela IA' },
  { src: '/images/tela-quiz.png', alt: 'Tela de configuração do quiz gerado a partir do conteúdo', legenda: 'Tela do quiz' },
  { src: '/images/pergunta-quiz.png', alt: 'Tela de uma pergunta do quiz', legenda: 'Pergunta do quiz' },
  { src: '/images/pontos-fortes-fracos.png', alt: 'Histórico do estudante', legenda: 'Histórico do estudante' },
]

export const equipe = [
  { foto: '/images/integrante-1.jpg', nome: 'JOÃO ANTONY', funcao: 'Líder de Projeto', descricao: 'Responsável pela organização geral da equipe e pela apresentação da solução.' },
  { foto: '/images/integrante-2.jpg', nome: 'MATHEUS MUNHOZ', funcao: 'Desenvolvedor Front-End', descricao: 'Responsável pela criação da Landing Page e pela interface do protótipo.' },
  { foto: '/images/integrante-3.jpg', nome: 'CAIO PALMEIRA', funcao: 'UX/UI Designer', descricao: 'Responsável pelos mockups, pela identidade visual e pela experiência do usuário.' },
  { foto: '/images/integrante-4.jpg', nome: 'DAVI DUTRA', funcao: 'Pesquisador', descricao: 'Responsável pela pesquisa do problema, do público-alvo e das referências da solução.' },
  { foto: '/images/integrante-5.jpg', nome: 'MIGUEL GOMES', funcao: 'Desenvolvedor Back-End', descricao: 'Responsável pela lógica da IA que gera os resumos e os quizzes a partir das fotos.' },
]
