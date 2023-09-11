// Exemplo 1
const menu = document.querySelector('.menu')

menu.classList.add('ativo')
menu.classList.remove('azul')

if(menu.classList.contains('azul')){
    menu.classList.add('possui-azul')
}else{
    menu.classList.add('nao-possui-azul')
}

console.log(menu)

//Exemplo 2 

const animais = document.querySelector('.animais')
console.log(animais.attributes[0])

//exemplo 3

const img = document.querySelector('img')

console.log(img.getAttribute('src'))