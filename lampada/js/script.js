const ligar = document.getElementById('ligar')
const desligar = document.getElementById('desligar')
const lampada = document.getElementById('lamp')

function estaQuebrada(){
    return lampada.src.indexOF('quebrada') > -1
}
function lampLigada(){
    if(!estaQuebrada()){
    lampada.src = "img/ligada.jpg"
    }
}
function lampdesligada(){
    if(!estaQuebrada()){
    lampada.src = "img/desligada.jpg"
}
}

function lampQuebrada(){
    lampada.src = "img/quebrada.jpg"
}


ligar.addEventListener('click',lampLigada)
desligar.addEventListener('click', lampdesligada)

lampada.addEventListener('mouseover', lampLigada)
lampada.addEventListener('mouseleave', lampdesligada)
lampada.addEventListener('dblclick', lampQuebrada)

