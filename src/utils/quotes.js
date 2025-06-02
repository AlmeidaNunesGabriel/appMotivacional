const motivationalQuotes = [
  "O sucesso é a soma de pequenos esforços repetidos diariamente.",
  "Acredite em si mesmo e tudo será possível.",
  "O futuro pertence àqueles que acreditam na beleza de seus sonhos.",
  "Não espere por oportunidades, crie-as.", 
  "A persistência é o caminho do êxito.",
  "Grandes realizações requerem grande ambição.",
  "O único lugar onde o sucesso vem antes do trabalho é no dicionário.",
  "Comece onde você está, use o que você tem, faça o que você pode.",
  "A motivação é o que te faz começar. O hábito é o que te mantém em movimento.",
  "Não conte os dias, faça os dias contarem.",
  "A disciplina é a ponte entre objetivos e conquistas.",
  "Seja você mesmo, todos os outros já foram pegos.",
];

export const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
  return motivationalQuotes[randomIndex];
};

export default motivationalQuotes;