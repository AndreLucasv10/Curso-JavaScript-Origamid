// Exemplo 1

var pessoa = {
  nome: "André",
  idade: 22,
};
console.log(pessoa);

// Exemplo 2

var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    return this.lados * lado;
  },
  cinco() {
    return 5;
  },
};
console.log(quadrado.perimetro(5));
console.log(quadrado.perimetro(5));
console.log(quadrado.cinco());

//Exemplos 3

var menu = {
  width: 800,
  height: 50,
  backgroundColor: "#84e",
};
menu.backgroundColor = "#000";

menu.color = "blue";

menu.esconder = function () {
  console.log("Escondi");
};

var bg = menu.backgroundColor;

// Exemplo 4
var menu = {
  width: 800,
  height: 50,
  backgroundColor: "#84e",
  metadeHeight() {
    return this.height / 2;
  },
};
