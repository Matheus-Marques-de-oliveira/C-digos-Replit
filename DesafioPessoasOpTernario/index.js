//DesafioPessoasOpTernario
/**DESAFIO 
1) crie um array pessoas
2) Crie um array vazio (meninos)
3) Crie um array vazio (meninas)
4) Faça uma função que:
// Itere(loop) sobre o array pessoas
// Caso o atributo sexo seja == "F"
5) Adicione o objeto atual ao array meninas(array.push(obj))
6) Caso contrário, se for "M" adicione ao objeto(meninos))
7) Imprima os objetos> [pessoas, meninos, meninas]]*/
const pessoas = [
  {nome: "Ana", idade: 23, sexo: "F"},
  {nome: "Julio", idade: 18, sexo: "M"},
  {nome: "Claudia", idade: 23, sexo: "F"},
  {nome: "Creidson", idade: 43, sexo: "M"},
  {nome: "Rodolfo", idade: 17, sexo: "M"},
];

const animais = [
  {nome: "Cachorro", raça: "PitBull", pelo: "Marrom", sexo: "M"},
  {nome: "Cachorro", raça: "Rottweiler", pelo: "Preto", sexo: "F"},
  {nome: "Cachorro", raça: "Labrador", pelo: "Branco", sexo: "M"},
  {nome: "Cachorro", raça: "Pastor Alemão", pelo: "Preto", sexo: "M"},
]
// Array > Objeto animais: raça, pelo, sexo

const meninas = [];
const meninos = [];
function filtroPessoas(arrPessoas) {
  if (typeof arrPessoas == "object") {
    for (pessoa of arrPessoas) {
      pessoas.sexo == "F" 
        ? meninas.push(pessoa) 
        : meninos.push(pessoa)}
    }
  }
filtroPessoas(pessoas);
filtroPessoas(animais);
console.log("--- MENINAS ---");
console.log(meninas);
console.log("--- MENINOS ---");
console.log(meninos);
