const cidades: string[] = [
  "Salvador",
  "São Paulo",
  "Brasilia",
  "Recife",
  "Rio de Janeiro",
];

const filtrarCidades = (cidades: string[]): string[] => {
  const resultado: string[] = cidades.filter((cidade) => {
    return cidade.length <= 8;
  });

  return resultado;
};

console.log(filtrarCidades(cidades));
