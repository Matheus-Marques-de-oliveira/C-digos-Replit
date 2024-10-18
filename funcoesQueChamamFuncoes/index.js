/** crie um array objetos => pessoas
 * com os seguintes atributos: nome/sobrenome
 * crie uma função que itere sobre o array
 * e retire nomes e sobrenomes
 * crie uma variável com o conteúdo:
 *      -> const emailBase = "@escola.pr.gov.br"
 * a partir desses dados forme um @escola com
 * nome.sobre+emailbase
 * execute a função...
 */

// Ordem passos do algoritmo
   // A) Criar um array de pessoas
   // B) Iterar sobre o array e montar o email
   // C) Converter para uma funçao reaproveitavel
   // D) Criar uma funçao para cadastro de pessoas
const pessoas = [
  // JSON
  { nome: "João", sobrenome: "Hens" },
  { nome: "Jeferson", sobrenome: "Trincheira" },
];
// email base
const emailBase = "@escola.pr.gov.br";

function gerarEmail() {
  if(pessoas.length == 0){
    console.error("Nenhuma pessoa cadastrada")
  } else {
    for (pessoa of pessoas) {
        const nome = pessoa.nome;
        const sobrenome = pessoa.sobrenome;
  const email = `${nome}.${sobrenome}${emailBase}`;
        console.log(email.toLowerCase());  
    }
  }
}
gerarEmail()
// criar uma funçao de cadastro

function cadastrarPessoa(nome, sobrenome) {
  pessoas.push({
      nome: nome,
      sobrenome: sobrenome,
    });
}
cadastrarPessoa("João", "Hens");
cadastrarPessoa("Jeferson", "Trincheira");

gerarEmail();
