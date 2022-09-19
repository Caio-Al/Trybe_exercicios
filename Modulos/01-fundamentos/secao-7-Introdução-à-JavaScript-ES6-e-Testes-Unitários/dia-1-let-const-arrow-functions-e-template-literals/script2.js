const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = (params) => {
  const numeros = params.sort((a, b) => a - b);
  return numeros;
 // Seu código aqui.
};

const ordemCerta = sortOddsAndEvens(oddsAndEvens);

console.log(`Os números ${ordemCerta} se encontram ordenados de forma cresente`); // será necessário alterar essa linha 😉
