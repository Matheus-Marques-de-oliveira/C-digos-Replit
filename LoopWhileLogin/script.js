
/** DESAFIO LOGIN COM WHILE 
/**
 * CRIE UM CÓDIGO QUE PEÇA LOGIN E SENHA
 * ENQUANTO O USUÁRIO NÃO ESTIVER LOGADO
 * CASO USUÁRIO E SENHA ESTEJAM CORRETOS
 * ENVIE MSG DE BOAS VINDAS
 * CASO CONTRÁRIO, INFORME O ERRO!
 */

const usuario = "Admin"
const senha = "1234"
let estalogado = false
let u, s = ""
while (!estaLogado) {
  u = window.prompt("Digite o usuário: ")
  s = window.prompt('Digite sua senha: ')
  if (u.toLocaleLowerCase == usuario && s == senha) {
    estalogado = true
    window.alert("Bem vindo!" + usuario)
  }
}
window.prompt("Qual é o seu nome: ")

/** DESAFIO WHILE 01 */
/**
 * CRIE UM CÓDIGO QUE PEÇA AO USUÁRIO PARA
 * ADIVINHAR QUAL É MEU NÚMERO DA SORTE
 * Math.random() * 50
 * INSPIRA UM LIMITE MÁXIMO DE 3 TENTATIVAS
 * CASO O USUÁRIO EXCEDA AS TENTATIVAS, QUEBRE O PROGRAMA
 * SENÃO DE OS PARABENS E QTDE DE TENTATIVAS USADAS.
 */