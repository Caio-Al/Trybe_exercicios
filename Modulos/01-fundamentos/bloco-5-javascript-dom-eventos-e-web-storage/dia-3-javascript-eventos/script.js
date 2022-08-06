function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
};
createDaysOfTheWeek();


let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];





let ulA = document.querySelector('#days');

  for (let index = 0; index < decemberDaysList.length; index += 1) {
    const element = decemberDaysList[index];
    
    
    let calendario = document.createElement('li')
    calendario.innerText = element
    calendario.className = 'day'
    
    ulA.appendChild(calendario)

    if (element === 24 || element === 31) {
      calendario.className = 'day holiday'  
    }

    if (element === 4 || element === 11 || element === 18) {
        calendario.className = 'day friday'  
    }

    if (element === 25) {
        calendario.className = 'day holiday friday'  
      }
    }
    
  function botãoDeFerias(params){
    let divA = document.getElementsByClassName('buttons-container')[0];
    
    let botão = document.createElement('button');
    let botãoId = "btn-holiday"
    botão.innerHTML = params
    botão.id = botãoId

    divA.appendChild(botão)

}

botãoDeFerias('Feriados');


function feriasColoridas(params) {

    let buttonFerias = document.getElementById('btn-holiday')
    
    let diasDeFerias = document.querySelectorAll('.holiday')

    let corPadrao = 'rgb(238, 238, 238)'

    let corFerias = 'rgb(224, 238, 147)'

    buttonFerias.addEventListener('click', function(){

        for (let index = 0; index < diasDeFerias.length; index += 1) { 
            if (diasDeFerias[index].style.backgroundColor === corPadrao) {
                diasDeFerias[index].style.backgroundColor = corFerias
            } else {
                diasDeFerias[index].style.backgroundColor = corPadrao
            }
        }
    });
    
}

feriasColoridas();
  
function botãoSexta(params){
    let divA = document.getElementsByClassName('buttons-container')[0];
    
    let botão = document.createElement('button');
    let botãoId = "btn-friday"
    botão.innerHTML = params
    botão.id = botãoId

    divA.appendChild(botão)

}

botãoSexta('Sexta-feira');



function sextaData(params) {

    let buttonSexta = document.getElementById('btn-friday');
    
    let diasSexta = document.querySelectorAll('.friday');

    let textoSexta = 'Sextoou';

    buttonSexta.addEventListener('click', function(){

        for (let index = 0; index < diasSexta.length; index += 1) { 
        
            if (diasSexta[index].innerHTML !== textoSexta) {
                diasSexta[index].innerHTML = textoSexta
            } else {
                diasSexta[index].innerHTML = params[index];
            }
        }
    });
    
}

let SextasDoMes = [ 4, 11, 18, 25 ];
sextaData(SextasDoMes);

function zoomDatas() {
    let dias = document.getElementById('days')

    dias.addEventListener('mouseover', function(params2){
     params2.target.style.fontSize = '35px';
     
    });
    
}

function zoomPadrao() {
    let dias = document.getElementById('days')

    dias.addEventListener('mouseout', function(params2){
     params2.target.style.fontSize = '20px';
     
    });
}

zoomDatas()
zoomPadrao()

function blocoTarefas(tarefa) {
    let divTarefa = document.getElementsByClassName('my-tasks')[0];

    let span = document.createElement('span')
      span.className = 'spanClass'
      span.innerHTML = tarefa

      divTarefa.appendChild(span)


}

blocoTarefas('conzinha')

function colorirDiv(cor){
    let divTarefa = document.getElementsByClassName('my-tasks')[0];

    let divCor = document.createElement('div');
    divCor.className = 'task'

    divCor.style.background = cor

    divTarefa.appendChild(divCor)

    
}

colorirDiv('green')

// function alterarCor(params2) {
//     let dias = document.getElementById('days')
//     dias.addEventListener('click', function(params){
//         let cor = document.getElementsByClassName('day')
//         cor.style.color = params2
//         params.target.classList.toggle(cor);
//     });
// }

// alterarCor('red')

function setDayColor() {
    let selectedTask = document.getElementsByClassName('task selected');
    let days = document.querySelector('#days');
    let taskDiv = document.querySelector('.task');
    let taskColor = taskDiv.style.backgroundColor;
    
    days.addEventListener('click', function(event){
      let eventTargetColor = event.target.style.color;
      if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
        let color = selectedTask[0].style.backgroundColor; // Pega a cor de fundo do primeiro elemento salvo na variável "selectedTask" e salva na variável "color"
        event.target.style.color = color; // atribui a cor salva na variável "color" ao evento alvo
      } else if (eventTargetColor === taskColor) {
        event.target.style.color = 'rgb(119,119,119)';  // Altera a cor de fundo do evento alvo para "rgb(119, 119, 119)"
      }
    });
  }

  setDayColor();

// function selerDiv() {
//     let seletor = document.getElementsByClassName('task selected');
//     let task = document.getElementsByClassName('task')

//     seletor.addEventListener('click', function(params) {
//         if (seletor.length === 0) {
//             params.target.className = 'task selected'
//         } else {
//             params.target.className = 'task'
//         }
//     })

// }

// selerDiv()



  // Escreva seu código abaixo.