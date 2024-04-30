const lista: number[] = [0, 122, 4, 6, 8, 44];

const validarNuemrosPares = (numeros: number[]): string => {
  const resultado: boolean = numeros.every((numero) => {
    return numero % 2 === 0;
  });

  if (resultado) {
    return "Arrey válido";
  }

  return "Array inválido";
};

console.log(validarNuemrosPares(lista));
