//Exemplo 1

// const imgs = document.querySelectorAll('img')

// let i = 0;

//       (Elemento, Posição no Array, A prorpia Array)
//imgs.forEach(function(item, index, array){
//console.log(item, index, array)

//});
// Exemplo 2

const titulos = document.getElementsByClassName('titulo')
// console.log(titulos)

const titulosArrays = Array.from(titulos)

titulosArrays.forEach(function(item){
  //  console.log(item)
});

// Exemplo 3 

//Exemplo 1

const imgs = document.querySelectorAll('img')

//Argumentos único não precisa de parênteses
imgs.forEach(item => {
    console.log(item)
})

// Multiplos argumentos precisam de parênteses

imgs.forEach((item,index) => {
    console.log(item,index)
})

// sem argumentos precisa dos parênteses, mesmo vazio

let i = 0
imgs.forEach(() => {
    console.log(i++)
})