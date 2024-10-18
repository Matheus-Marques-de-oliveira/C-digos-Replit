// exports EJS
// variáveis, funções, classes

const nome = "Julius";

function dizOla() {
  return `Olá, ${nome}`;
}
// exportação inline
export function toUpper(text) {
  return `${text.toUpperCase()}`;
}
// exportação default (padrão)
function toLower(text) {
  return `${text.toLowerCase()}`;
}
export default toLower;

// exportação multipla
export {nome, dizOla};