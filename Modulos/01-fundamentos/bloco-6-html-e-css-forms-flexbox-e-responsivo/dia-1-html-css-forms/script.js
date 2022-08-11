let input_enviar = document.querySelector("#enviar");

function nao(params){
        params.preventDefault()
    
}

input_enviar.addEventListener("click", nao)