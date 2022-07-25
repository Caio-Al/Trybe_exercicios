// const a = 1;
// const b = 3;
// const c = 4;

//  if( a > b && a > c){
//     console.log(a);
//  }
//  else if(b > a && b > c) {
//     console.log(b);
//  }
//  else {
//     console.log(c);
//  }

// const a = -100;
// const b = 60;
// const c = 20;

// let valoresDosAngulos = a + b + c; 

// if(valoresDosAngulos === 180) {
//     console.log("true");
// }
// else if(valoresDosAngulos < 180 | valoresDosAngulos > 180) {
//     console.log("false");
// }
// else {
//     console.log("Erro: não é uma junção de angulos");
// }

//   peça = "CaVaLo";
//   let movimento = '?';

//   switch (peça.toLowerCase()){
//     case 'cavalo':
//       movimento = 'movimentos em L';
//       break
//     case 'torre':
//         movimento = 'movimetos em linhas retas ate onde desejar';
//         break  
//     case 'bispo':
//         movimento = 'movimentos em diagonais';
//         break
//     case 'peão':
//         movimento = 'movimentos em linha reta uma casa por vez, podendo matar so mente na diagonal';
//         break
//     case 'rainha':
//         movimento = 'movimentos em todas as direções retas e diagonais quantas casas quiser';
//         break
//     case 'rei':
//         movimento = 'movimentos em todas as direões mas so mente uma casa por vez';
//         break
        
//     default:
//      movimento ="isso não é uma peça de xadrez"   
// }
//   console.log(movimento);

// const converso = "papar";
//   if (converso < 0 | converso > 100) {
//     console.log("Irmão, essa porra não conta");
// }
// else if (converso >= 90) {
//      console.log("A");
// }
// else if (converso <= 80 && converso > 70) {
//     console.log("B");
// }
// else if (converso <= 70 && converso > 60) {
//     console.log("C");
// }
// else if (converso <= 60 && converso > 50) {
//     console.log("D");
// }
// else if (converso <= 50 && converso > 40) {
//     console.log("E");
// }
// else if (converso < 50) {
//     console.log("F");
// }
// else {
//     console.log('ISSO NÃO É UM NUMERO IMBECIL');
// }

// const a = 11;
// const b = 6;
// const c = 2;

// if ((a % 2) === 1 || (b % 2) === 1 || (c % 2) === 1) {
//     console.log(true);
// }
// else {
//     console.log(false);
// }

let protudo = "celular";
let valorDeCusto = 900;
let valorDeCustoTotal = valorDeCusto + valorDeCusto * 0.2;
let valorDeVenda = 2500;
let lucro = valorDeVenda - valorDeCustoTotal;
 console.log(lucro);

 let a =0;
for(let i=1;i<=50;i++){a+=i}
console.log(a)