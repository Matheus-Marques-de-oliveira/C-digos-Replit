// ex 01 - alterar o salário
let salario = 1000;
const nome = "Bethesda";
const sobrenome = "bugs";

function imprimeDados() {
  const pessoa = `Nome: ${nome} ${sobrenome}`;
  const salarioFormatado = `R$ ${salario},00`;
  console.log(pessoa);
  console.log("Ganha: ", salarioFormatado);
}
// Execução ou invocaçã0
imprimeDados();

// Imprimir a cada 1s invocando a função imprime dados

// setInterval(function(){
//   console.clear()
//   console.log(salario)
//   salario = salario + 100;
// }, 200);
