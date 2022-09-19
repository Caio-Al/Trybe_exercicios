const ordemPalavras = palavras => {
    let ordem = palavras.split(" ")
    let MaxSize = 0
    let palavra
    for (let index of ordem) {
         if (index.length >MaxSize) {
            MaxSize = index.length
            palavra = index
         }
    }

    return palavra
}

console.log(ordemPalavras("caralho mlk que isso porraaaa"));

const palvarasOrdem = palavras => palavras.split(" ").sort((a, b) => b.length - a.length)[0]

console.log(palvarasOrdem("caralho mlk que isso porraaaa"));
