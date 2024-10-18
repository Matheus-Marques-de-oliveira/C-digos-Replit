// OPERADOR TERNÁRIO 
// SERVE PARA FAZER
// ESCOLHA DO FLUXO DE
// UMA CONDIÇÃObject, OU SEJA, PODEMOS SUBSTITUIR O USO DO IF/ELSE POR ELE.
// EXO: <variavel> = <condição> ? 
// <valor_verdadeiro> : <valor_falso>;

const { arrayBuffer } = require("stream/consumers");

// JEITO TRADICIONAL DO IF
const idade = 18
if (idade >= 18) {
  console.log("PERMITA A ENTRADA");
} else {
  console.log("ACESSO NEGADO")
}
// OPÇÃO TERNÁRIA
const passe = idade >= 18 ? "PERMITA A ENTRADA" : "ACESSO NEGADO"
console.log(passe)

// TERNÁRIO COM MULTIPLOS VALORES
const operador = "+"

// function calcula(n1, n2, operador) {
//   const res = operador === "+" ? n1 + n2
//     : operador === "-" ? n1 - n2 
//     : operador === "*" ? n1 * n2
//     : n1/ n2
//   return res
// }
console.log(calcula(2, 5, operador))
// CONVERTA O CÓDIGO ACIMA EM IF/ELSE
// function calcula(n1, n2, operador) {
//   let res = 0;
//   if(operador === "+") {
//     res = n1 + n2
//   } else if(operador === "*") {
//     res = n1 * n2
//   } else if(operador === "-") {
//     res = n1 - n2
//   } else {
//     res = n1 / n2
//   }
//   return res
// }
console.log(calcula(2, 5, operador))

/**DESAFIO */
// 1) crie um array pessoas
// deve um objeto com nome/idade/sexo
// 2) crie um array vazio (meninos)
// 3) crie um array vazio (meninas)
// faça uma função que:
// itere(loop) sobre o array pessoas
// caso o atributo sexo seja == "f"
// adicione o objeto atual ao array meninas (arrayBuffer.push(obj))
// caso contrário, se for "m" adicione ao objeto (meninos))
// imprima os objetos> [pessoas, meninos, meninas]]

const pessoas = [
  { nome: "João", idade: 25, sexo: "m" },
  { nome: "Maria", idade: 30, sexo: "f" },
  { nome: "Pedro", idade: 40, sexo: "m" },
  { nome: "Ana", idade: 35, sexo: "f" },
  { nome: "Carlos", idade: 50, sexo: "m" },
  { nome: "Julia", idade: 45, sexo: "f" },
  { nome: "Lucas", idade: 20, sexo: "m" },
  { nome: "Laura", idade: 28, sexo: "f" },
  { nome: "Fernando", idade: 38, sexo: "m" },
  { nome: "Isabela", idade: 32, sexo: "f" },
  { nome: "Gustavo", idade: 27, sexo: "m" },
  { nome: "Bianca", idade: 33, sexo: "f" }]

const