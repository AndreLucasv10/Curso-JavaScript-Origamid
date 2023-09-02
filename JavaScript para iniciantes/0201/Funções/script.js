//Exemplo 1

function areaQuadrado(lado) {
  return lado * lado;
}
areaQuadrado(4); //16
console.log(areaQuadrado(4));

//Exemplo 2

function pi() {
  return 3.14;
}

var total = 5 * pi();
console.log(total);

//Exemplo 3

function imc(peso, altura) {
  var imc = peso / (altura * altura);
  return imc;
}
console.log(imc(80, 1.8));

//Exemplo 4

function corFavorita(cor) {
  if (cor === "azul") {
    return "Você gosta do céu";
  } else if (cor === "verde") {
    return "Você gosta de mato";
  } else {
    return "Você não gosta de nada";
  }
}
corFavorita(); // retorna 'Você não gosta de nada'

//Exemplo 5

addEventListener("click", function () {
  console.log("oi");
});

//exemplo 6

function imc2(peso, altura) {
  const imc = peso / altura ** 2;
  console.log(imc);
}

imc2(120, 1.8);

// Exemplo 7

function terceiraIdade(idade) {
  console.log(typeof idade);
  if (typeof idade !== "number") {
    return "Por favor preencha um número";
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}
console.log(terceiraIdade("oi"));

// Exemplo 8

var totalPaises = 193;
function faltaVisitar(paisesVisitados) {
  return `Falta visitar ${totalPaises - paisesVisitados} países`;
}
console.log(faltaVisitar(100));

//exemplo 9

var profissao = "Designer";

function dados() {
  var nome = "André";
  var idade = 28;
  function outrosDados() {
    var endereco = "Rio de Janeiro";
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados()); // Retorna 'André, 29, Rio de Janeiro, Designer'
outrosDados(); // retorna um erro
