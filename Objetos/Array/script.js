
const precos = [49, 99, 69, 89];

const dados = [new String('Tipo 1'),
['Carro', 'Portas', { cor: 'Azul', preco: 2000 }],
function andar(nome) { console.log(nome) }];

dados[2]('gay')
console.log(dados[1][2].cor)

const carros = new Array('Ford', 'fiat', 'honda')

carros[2] = 'Ferrari'
carros[3] = 'kia'
carros[10] = 'Citroen'

const li = document.querySelectorAll('li');
console.log(li)

const arrayLi = Array.from(li)
console.log(arrayLi)

const obj = {
    0: 'Andre',
    1: 'Rafael',
    2: 'teste',
    length: 3
}

const objArray = Array.from(obj)
console.log(objArray)
////////////////////////////////////////////////////////////////////////////////////



const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];
console.log(frutas[2][1])

frutas[0].length; // 6
frutas[1].length; // 4
frutas[2].length; // 2
///////////////////////////////////////////////////////////////////////////////////




const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
console.log(instrumentos.sort())
console.log(instrumentos)

const idades = [32, 21, 33, 43, 1, 12, 8];

console.log(idades.sort())
//////////////////////////////////////////////////////////////////////////////////////


console.log(carros)
console.log(carros.splice(2, 0, 'Ford'))
console.log(carros)