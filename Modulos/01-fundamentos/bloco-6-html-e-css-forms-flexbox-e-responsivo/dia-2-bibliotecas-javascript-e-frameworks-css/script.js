
const myModal = new bootstrap.Modal(document.getElementById('myModal'))

let button = document.getElementById('nao-clicar')


button.addEventListener('click',function () {
    myModal.show();
} )
// or
// const myModalAlternative = new bootstrap.Modal('#myModal', options)