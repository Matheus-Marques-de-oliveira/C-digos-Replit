// imports de módulos

import { nome, dizOla, toUpper } from "./lib/strings.js";
// importação default
import toLower from "./lib/strings.js";

console.log(nome);

console.log(dizOla());
console.log(toUpper("Marcello"));
console.log(toLower("AnNe"));
/** passos de utilização dos módulos EJS
 * 1) exportamos com export ou export default
 * 2) liberamos o uso de módulos "type": "module"
 * 3) importamos com import
 * 4) utilizamos o módulo importando dentro index.js
 */
