// Declaração de funções
function dizOla() {
  console.log("Olá");
}
function olaPessoa(nome) {
  console.log("Olá, " + nome);
}
const salario = 80000

function formataSalario() {
  return "R$" + salario + ",00"
}
// Funções do tipo arrow
const imprimeMeuTime = () => {
  return "Vasco";
};

// Invocação de funções
dizOla();
olaPessoa("Bethesda");
// formataSalario()
console.log(formataSalario());
console.log(imprimeMeuTime());
