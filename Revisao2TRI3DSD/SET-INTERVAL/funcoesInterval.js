// SetInterval que execute
/**
 * uma função personalisada
 * deve imprimir um objeto.js
 * que seja executada de em 2s
 * pela SetInterval
 */

function imprimirObjeto() {
  const objeto = {
    nome: "Bethesda",
    idade: 18,
    cidade: "São Paulo",
  };
  console.log(objeto);
}

setInterval(imprimirObjeto, 2000);
// setTimeOut
// clearInterval()
