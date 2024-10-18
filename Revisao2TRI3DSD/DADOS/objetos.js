// Objetos são estruturas complexas de dados em JavaScript
// São organizados por chave-valor (key-value)
// Contém atributos e métodos
// Objetos literais

const banana = {
  cor: "amarela",
  casca: true,
  peso: 100,
  paisesDeOrigem: ["Brasil", "Chile"],
  descascar: function () {
    this.casca = false;
    return `Banana descascada com sucesso!`;
  },
};
console.log(banana);
console.log("---------------------");
console.log(Object.keys(banana)); // Retorna as chaves
console.log("---------------------");
console.log(Object.values(banana)); // Retorna os valores
console.log(banana.casca);
console.log(banana.descascar());

// É Possível fazer uma iteração em objetos
// For, for in, for of
