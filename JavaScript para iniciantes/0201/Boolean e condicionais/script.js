// Exemplo 1

var possuiGraduacao = true;
var possuiDoutorado = true;
if (possuiGraduacao) {
  console.log("É verdadeiro");
} else {
  console.log("não é verdadeiro");
}

// Exemplo 2

if (possuiDoutorado) {
  console.log("Possui graduação e doutorado");
} else if (possuiGraduacao) {
  console.log("Possui graduação, mas não possui doutorado");
} else {
  console.log("não possui graduação");
}

//Exemplo 3

var nome = "André";

if (nome) {
  console.log(nome);
} else {
  console.log("nome não existe");
}

// Exemplo 4

if (5 - 5 && 5 + 5) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}
var condicional = 5 - 10 && 5 + 5;
if (condicional) {
  console.log("Verdadeiro", condicional);
} else {
  console.log("Falso");
}

//Exemplo 5

var condicional2 = 5 - 5 || 5 + 5 || 10 - 2;
console.log(condicional2);

// Exemplo 6

var corFavorita = "Azul";

switch (corFavorita) {
  case "Azul":
    console.log("Olhe para o Céu.");
    break;
  case "Amarelo":
    console.log("Olhe para o Sol.");
    break;
  case "Verde":
    console.log("olhe para a floresta");
    break;
  default:
    console.log("Feche os olhos.");
}
