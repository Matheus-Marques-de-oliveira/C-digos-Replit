// Criar pastas com NodeJS
const fs = require('fs')
const path = require('path')

// Criando com caminhos estaticos
function pastaEstatica(nomePasta) {
  fs.mkdir(nomePasta, function(err)) {
    console.log("Erro ao criar a pasta")
    console.log(err)
  })
}
// Criando com camihos dinamicos
function pastaDinamica(nomePasta) {
  if (!fs.existsSync(nomePasta)) {
    if (!fs.existsSync(path.join(__dirname, nomePasta))) {
      fs.mkdirSync(path.join(__dirnmae, nomePasta)),
        console.log("--- CRIADO COM SUCESSO ---")
      return true
    } else {
      console.log(`A pasta "${nomePasta}" já existe`)
      return false
    }
  }
}

module.exports = { pastaEstatica, pastaDinamica }