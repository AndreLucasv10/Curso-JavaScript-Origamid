// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

var minhaIdade = 22;
var idadeParente = 21;

if (minhaIdade > idadeParente) {
  console.log("É maior");
} else if (minhaIdade < idadeParente) {
  console.log("É menor");
} else if (minhaIdade === idadeParente) {
  console.log("É igual");
}
// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - " " && 5 - 2;
console.log(expressao);
// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = "Andre";
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(
  !!nome,
  !!idade,
  !!possuiDoutorado,
  !!empregoFuturo,
  !!dinheiroNaConta
);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
  totaldif = brasil - china;
  console.log(
    `A diferança de habitantes do brasil é ${totaldif} maior que a da china`
  );
} else if (brasil < china) {
  totaldif = china - brasil;
  console.log(
    `A diferança de habitantes da china é ${totaldif} maior que a do Brasil`
  );
} else if (china === brasil) {
  console.log("É igual");
}

// O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

// O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão");
} else {
  console.log("Falso");
}
