let fatorial = 5;
let resultado = fatorial;
for (let i = 1; i < fatorial; i++) {
    resultado *= i;
}
console.log(resultado);

let osNumeros = 5

const fatoracao = (numero) => {
    let fatorando = numero
    if (numero > 0) {
      for (let index = 1; index < numero; index += 1){
        fatorando *= index     
    }
    } else {
        fatorando = 1
    }
    return fatorando
}


const factorial = (number) => {
    let result = 1;
    for (let index = 2; index <= number; index += 1) {
        result *= index;
    }
    return result;
  };
  const print = factorial(osNumeros); 

  console.log(`Esse é o fatorial ${print}`);



const fim = fatoracao(osNumeros)

console.log(`Esse é o fatorial de ${osNumeros}: ${fim}`);


const recursiva = Num => Num > 1 ? Num * recursiva(Num - 1) : 1;

console.log(recursiva(5));
