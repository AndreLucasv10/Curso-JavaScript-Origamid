// Crie uma função para verificar se um valor é Truthy
function verificarValor(valor) {
  var valor = false;
  if (valor === true) {
    return true;
  } else {
    return true;
  }
}
console.log(verificarValor());
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
  dado = "oi";
  return dado;
}
console.log(typeof tipodeDado());
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);
