window.onload = function() {
    let selectA = document.getElementById('selectA');
    selectA.addEventListener('change', function(){
        let selected = selectA.selectedOptions[0];
        document.body.style.backgroundColor = selected.value
        
        localStorage.setItem('backgroundColor', selected.value);
    })
    
    let selectB = document.getElementById('selectB');
    selectB.addEventListener('change', function(){
        let selected = selectB.selectedOptions[0];
        document.body.style.color = selected.value
        
        localStorage.setItem('TextoColor', selected.value);
    })

    let input =document.querySelector('input[name= "inputSus"]')
    input.addEventListener('change', function(){
    document.getElementsByClassName('section')[0].style.fontSize = `${input.value}px`
        

     localStorage.setItem('font-size',`${input.value}px`);

    })

    let saveBackground = localStorage.getItem('backgroundColor');
    document.body.style.backgroundColor = saveBackground;

    let saveTextoColor = localStorage.getItem('TextoColor');
    document.body.style.color = saveTextoColor;


    let saveFontSize = localStorage.getItem('font-size');
    document.body.style.fontSize = saveFontSize;

}



// function modoTextoClaro(params) {
    
//     let div = document.getElementsByClassName('buttons-container')[0]
    
//     let botão = document.createElement('button');
//     let botãoID = 'botaoTextoCor'
//     botão.innerHTML = params
//     botão.id = botãoID

//     div.appendChild(botão)
// }

// modoTextoClaro('Texto Claro')


// function mudancaTexto() {
//     let body = document.getElementsByClassName('body')[0]
//     let botao = document.getElementById('botaoTextoCor')

//     botao.addEventListener('click', function(){
//     let corPadrao = 'black'

//     let corFundo = 'white'

//         if(body.style.color === corPadrao){
//             body.style.color = corFundo
//         } else {
//             body.style.color = corPadrao
//         }
    
// })

// }

// mudancaTexto()

// function modoTamanhoFonte(params) {
    
//     let div = document.getElementsByClassName('buttons-container')[0]
    
//     let botão = document.createElement('button');
//     let botãoID = 'botaoTamanho'
//     botão.innerHTML = params
//     botão.id = botãoID

//     div.appendChild(botão)
// }

// modoTamanhoFonte('fonte grande')

// function mudaTamanho() {
//     let body = document.getElementsByClassName('body')[0]
//     let botao = document.getElementById('botaoTamanho')

//     botao.addEventListener('click', function(){
//     let tamanhoPadrao = '19px'

//     let tamanhoFundo = '25px'

//         if(body.style.fontSize === tamanhoPadrao){
//             body.style.fontSize = tamanhoFundo
//         } else {
//             body.style.fontSize = tamanhoPadrao
//         }
    
// })

// }

// mudaTamanho()

// function aumentaEspaco(params) {
    
//     let div = document.getElementsByClassName('buttons-container')[0]
    
//     let botão = document.createElement('button');
//     let botãoID = 'botaoEspaco'
//     botão.innerHTML = params
//     botão.id = botãoID

//     div.appendChild(botão)
// }

// aumentaEspaco('aumente o Espaço')

// function mudaEspacamento() {
//     let body = document.getElementsByClassName('body')[0]
//     let botao = document.getElementById('botaoEspaco')

//     botao.addEventListener('click', function(){
//     let tamanhoPadrao = '33px'

//     let tamanhoFundo = '65px'

//         if(body.style.lineHeight === tamanhoPadrao){
//             body.style.lineHeight = tamanhoFundo
//         } else {
//             body.style.lineHeight = tamanhoPadrao
//         }
    
// })

// }

// mudaEspacamento()




