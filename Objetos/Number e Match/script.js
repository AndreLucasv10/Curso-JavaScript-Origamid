// Retorne um número aleatório
// entre 1050 e 2000
const aleatório = Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050;
console.log(aleatório)
// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';

numerosArray = numeros.split(',').map(numero => parseFloat(numero.trim()))
console.log(Math.max.apply(null, numerosArray))
// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
    'R$ 230  ', 'r$  200']

function limparPreco(preco) {
    preco = +preco.toUpperCase().replace('R$', '').trim().replace(',', '.')
    console.log(preco)
}
limparPreco(listaPrecos)