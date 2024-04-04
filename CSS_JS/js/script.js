/* Arquivo JS + alterar CSS */

let titulo = document.querySelector('h1')

let imagem = document.querySelector('#foto')
imagem.setAttribute('src', 'img/imgpinkdl.jpg')
imagem.setAttribute('width', '280px', )

let box = document.querySelectorAll('.box')

/////// MODOS DE COR ///////
let tela = document.querySelector('main')

let btnDark = document.querySelector('#btdark')

let btnLight = document.querySelector('#btlight')

let btnPink = document.querySelector('#btpink')

let btnBlue = document.querySelector('#btblue')

let btnYellow = document.querySelector('#btyellow')

let btnRed= document.querySelector('#btred')

btnDark.addEventListener('click', modoDark)
btnLight.addEventListener('click', modoLight)
btnPink.addEventListener('click', modoPink)


function modoDark() {
    event.preventDefault()
    console.log('modo dark')
    tela.classList.add("dark")
    tela.classList.remove("light")
    tela.classList.remove("pink")
}

function modoLight() {
    event.preventDefault()
    console.log('modo light')
    tela.classList.remove("dark")
    tela.classList.add("light")
    tela.classList.remove("pink")
}

function modoPink() {
    event.preventDefault()
    console.log('modo pink')
    tela.classList.remove("dark")
    tela.classList.remove("light")
    tela.classList.add("pink")
}