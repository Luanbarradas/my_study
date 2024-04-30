const livros: string[] = [
  "Guerra e Paz",
  "A Montanha Magica",
  "Cem Anos de Solidão",
  "Dom Quixote",
  "A Divina Comédia",
];

const buscarLivro = (livros: string[], nomeLivro: string): string => {
  const posicao: number = livros.indexOf(nomeLivro);

  if (posicao === -1) {
    return "Livro não encontrado";
  }

  return `O livro está na posição ${posicao + 1}`;
};

console.log(buscarLivro(livros, "Cem Anos de Solidão"));
