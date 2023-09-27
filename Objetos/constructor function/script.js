/* constructor Functions é nada mais nada menos que uma function() que é responsavel para modificar os objetos que tem dentro dela
para fazer outros diferentes */

function Carro() {
  this.marca = "Marca";
  this.preco = 0;
}

/* Agora fazemos objetos modificando marca e preços e o que voce quiser colocar que estiver dentro dessa function seu mizeravel,
olha o exemplo ai de baixo seu merda */

/* new serve para criar um novo 'carro' em referencia aquela function lá de cima como se tivesse guardando esses novos carros criados em uma lista,
por isso que 'new Carro()' */

const honda = new Carro();
honda.marca = "honda";
honda.preco = 4000;

const fiat = new Carro();
fiat.marca = "Fiat";
fiat.preco = 3000;

// O que o (new) faz? veja ai embaixo desgraçado

const Honda = new Carro();

// primeiro: ele cria um objeto novo chamado honda

Honda = {};

// segundo : ele defini Honda como prototipo da function Carro() pra assim ele herdar tudo que tá dentro da function carro

Honda.prototype = Carro.prototype;

// terceiro: ele faz a variavel this para o objeto

this = Honda

// quarto : ele executa a função, trocando o this do Carro() pelo objeto

Honda.marca = 'Marca'
Honda.preco = 0

// quinto : depois disso tudo ele retorna o novo objeto