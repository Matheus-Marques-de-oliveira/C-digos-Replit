// criar um função que gera uma pasta
const fs = require('fs');
const path = require('path');

// criar um função sem o path
function criarPastaEstatica(pasta) {
  fs.mkdir(pasta, function(err) {
    console.log("Erro ao criar pasta")
    console.log(err)
  })
}
// criar um função com o path/if/try/catch
function criarPastaDinamica(pasta) {
  if (!fs.existsSync(path.join(__dirname, pasta))) {
    fs.mkdirSync(path.join(__dirname, pasta))
    console.log(`Pasta ${pasta} criada com sucesso!`)
  } else { }
  console.log(`Não foi possível criar a pasta ${pasta}`)
} 
}

// exportar módulos
module.exports = { criarPastaEstatica, criarPastaDinamica }