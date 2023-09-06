//Exemplo 1

var videoGames = ["Switch", "PS4", "XBox"];

videoGames[0]; // Switch
videoGames[2]; // Xbox

//Exemplo 2

var videoGames = ["Switch", "PS4", "XBox"];

videoGames.pop(); // Remove o último item e retorna ele
videoGames.push("3DS"); // Adiciona ao final da array
videoGames.length; // 3

// Exemplo 3

for (var numero = 0; numero <= 10; numero++) {
  //console.log(numero); 1 2 3 4 5 6 7 8 9 10
}
// Exemplo 4
var videoGames = ["Switch", "PS4", "XBox", "3DS"];

for (var item = 0; item < videoGames.length; item++) {
  // console.log(videoGames[item]);
}

//Exemplo 4

var videoGames = ["Switch", "PS4", "XBox", "3DS"];

for (var item = 0; item < videoGames.length; item++) {
  // console.log(videoGames[item]);
  if (videoGames[item] === "PS4") {
    break;
  }
}

//Exemplo 5
var frutas = ["banana", "pera", "maça", "Abaxaxi", "Uva"];
frutas.forEach(function (fruta, index) {
  console.log(fruta, index);
});
