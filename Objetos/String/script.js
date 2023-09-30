const comida = 'Pizza'
const agua = new String('Agua')

console.log(agua.length)


const frase = 'A melhor Linguagem é'
const linguagem = ' JavaScript'

const fraseFinal = frase.concat(linguagem)

const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja'

console.log(fruta.includes(listaFrutas))
console.log(listaFrutas.includes(fruta))

console.log(fruta.endsWith('na'))

const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

transacao1.slice(0, 3); // Dep
transacao2.slice(0, 3); // Dep
transacao3.slice(0, 3); // Tax

transacao1.slice(12); // cliente
transacao1.slice(-4); // ente
transacao1.slice(3, 6); // ósi

let itens = 'Camisas bermudas calçados saias canetas'
itens = itens.replace(/[ ]+/g, ', ')

console.log(itens)


const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');
const frutasArray = ['Banana', 'melancia', 'laranja']