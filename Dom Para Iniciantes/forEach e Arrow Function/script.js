//Exemplo 1

const animais = document.getElementById('animais')
console.log(animais)

// Exemplo 2

const gridSection = document.getElementsByClassName('grid-section')
console.log(gridSection)

//Exemplo 2

const primeiraLi = document.querySelector('li')
console.log(primeiraLi)

//Exemplo 3

const linksInterno = document.querySelector('[href^="#"')
console.log(linksInterno)

// Exemplo 4 

const animaisImg = document.querySelectorAll('.animais img')
console.log(animaisImg)

//Exemplo 5

const gridSectionHTML = document.getElementsByClassName('grid-section')
console.log(gridSectionHTML)
const gridSectionNode = document.querySelectorAll('.grid-section')
console.log(gridSectionNode)

gridSectionNode.forEach(function(item,index){
console.log(item)
})

const arrayGrid = Array.from(gridSectionHTML)