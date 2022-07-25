let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     soma += numbers[index];

    
// }

// let media = soma / numbers.length

// if (media > 20 ) {
//     console.log("valor maior que 20");
// }
// else {
//     console.log("valor menor que 20");
// }

// console.log(media);

for (let index = 0; index < numbers.length; index += 1) {
    if(numbers[index] % 2 !== 0){
        soma += 1;
    } 
}


if (soma === 0) {
    console.log("não tem numeros impars");    
}
else {
    console.log(soma);
}