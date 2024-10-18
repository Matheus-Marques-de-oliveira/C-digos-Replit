// Utilizar o modulo
import { pastaEstatica, pastaDinamica } from "./lib/gerenciadorArquivos.cjs";
// pastaEstatica("./contratos");

// Dentro da pasta atual
pastaDinamica("/Novorelatorio");
pastaDinamica("/ArquivoX");

// Cria um nivel acima da pasta atual
pastaDinamica("../Novorelatorio");
pastaDinamica("../ArquivoX");
