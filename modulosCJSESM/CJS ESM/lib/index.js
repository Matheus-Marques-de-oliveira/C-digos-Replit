// import
import { getGuilda } from "./lib/personagem.js";
import getPersonagem from "./lib/personagem.js";
import { fs, path, http } from "./lib/nativos.cjs";
// chamando função do mod. personagem
console.log(getPersonagem());
getGuilda(); // console.log()

// chamando módulos CJS
console.log(fs);
console.log(path);
console.log(http);
