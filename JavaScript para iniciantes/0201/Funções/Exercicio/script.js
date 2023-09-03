// Crie uma função para verificar se um valor é Truthy
function verificarValor(valor) {
  return !!valor;
}
console.log(verificarValor(2));
// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro(lados) {
  lados = 4;
  var soma = lados + lados + lados + lados;
  return soma;
}
console.log(perimetro());
// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  var nomecompleto = `${nome} ${sobrenome}`;
  return nomecompleto;
}
console.log(nomeCompleto("André", "Lucas"));
// Crie uma função que verifica se um número é par
function verificar(valor) {
  valor = 10;
  if (valor % 2 === 0) {
    return "É par";
  } else {
    return "É impar";
  }
}
console.log(verificar());
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipodeDado(dado) {
  dado = 21;
  return dado;
}
console.log(typeof tipodeDado());
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener("scroll", function () {
  console.log("André Lucas");
});
// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
  paisesVisitados = 30;
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  paisesVisitados = 30;
  var totalPaises = 193;
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar());
precisoVisitar(20);
jaVisitei(20);
