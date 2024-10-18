// Loops são laços/ciclos de repetição infinita
// for, for in, for of, foreach, while, do while
// Loop: inicialização, condição de parada, incremento

const pokedex = ["Pikachu", "Charmander", "Blastoise", "Pichu"];
//
const valores = [150, 250, 1000, 3500];

const pokemonList = [
  {nome: "Pikachu", tipo: "eletrico"}
  {nome: "Charmander", tipo: "fogo"}
  {nome: "Blastoise", tipo: "agua"}
  {nome: "Pichu", tipo: "eletrico"}
];
// Faça um loop retorne nome+tipo de cada pokemon
for (let pokemon of pokemonList) {
  const nome = pokemon.nome;
  const tipo = = pokemon=.tipo;
  console.log(`Nome: ${nome} Tipo: ${tipo}`);
}

// for (let i in valores) {
  // console.log(valores[i]);
//}
// for (let i of valores) {
  // console.log();
//}

// https://pythontutor.com/

// console.log(pokedex[3])
// Loop for in