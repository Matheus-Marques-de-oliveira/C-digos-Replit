// Set internal - executa "a cada" x milisegundos
/*let n = 0
const intervalo1 = setInterval(function() {
  console.clear()
  console.log("Executando a cada 1 segundo", n);
  n = n + 1
}, 1000)

// Set timeout - executa "após" x milisegundos
setTimeout(function() {
  clearInterval(intervalo1) // Stop no intervalo
  window.alert("Já passou 5 segundo") // Gera um pop up
  location.href = "https://www.youtube.com" // Redireciona a página"
}, 5000)

/** Exercício/ desafio */
// Gerar o número aleatório = Math.random() * 10
// A) Crie ujm programa que mostre um número
// randômico de 0 a 10 a cada 3 segundos

// B) Após passados 15 segundos, encerre o intervalo
// usando clearInterval e setTimeout

const intervalo2 = setInterval(function() {
  let aleatorio = Math.round(Math.random() * 10)
  console.log(aleatorio)
}, 3000) // 3 segundos

setTimeout(function() {
  alert("Pop up chato!")
  clearInterval(intervalo2)
  location.href = "https://classroom.google.com" // Redireciona a página
}, 15000) // 15 segundos
