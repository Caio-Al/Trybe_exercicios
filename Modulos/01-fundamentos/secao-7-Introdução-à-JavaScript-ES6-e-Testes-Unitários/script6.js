const substituaX = (frase, subistuto) => {
    let ordem = frase.split(" ")
    let subt = subistuto

    for (let index = 0; index < ordem.length; index += 1) {
        if (ordem[index] === "x")
           ordem[index] = subt
    }    

    return ordem.join(' ')
}

// console.log(substituaX("Trybe x aqui", "bebeto"));

const minhasSkills = func => {
    const skills = ["JavaScript", "HTML", "CSS"]
    let resultado = `${func}

    Minhas três principais habilidades são:
    `;
    for (let index = 0; index < skills.length; index += 1) {
        resultado = `${resultado}
        °${skills[index]}`;
    }
     return resultado
}


console.log(minhasSkills(substituaX("Trybe x aqui", "Caio")));