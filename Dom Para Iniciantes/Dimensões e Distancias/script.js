//Exemplo 1 

const listaAnimais = document.querySelector('.animais-lista')

const height = listaAnimais.clientHeight
const animaisTop = listaAnimais.offsetTop
console.log(height)

console.log(animaisTop)

const primeiroh2 = document.querySelector('h2')

const h2left = primeiroh2.offsetLeft

console.log(h2left)

//exemplo 2 

const rect = primeiroh2.getBoundingClientRect();

console.log(rect)

//Exemplo 3

console.log(
    window.innerWidth, 
    window.innerHeight,
    window.outerWidth,
    window.outerHeight,
    window.scrollY
)


// exercicio townq

function totalVotos(votos){
const contagemVotos = [0,0,0,0,0]

votos.forEach((voto) => {
    contagemVotos[voto]++
});
let Max = 0
let PopularFlavour = 0

for( i = 0; i < contagemVotos.length; i++){
    if(contagemVotos[i] > Max){
        Max = contagemVotos[i] 
        PopularFlavour = i
    }
}
return PopularFlavour

}
console.log(totalVotos([0, 2, 3, 4, 4]))



