// importando modulo com require
const http = require("http"); // importando modulo http

const PORT = 8000; // porta do servidor
// criando o servidor http
const servidor = http.createServer((req, res) => {
  console.log(req.url, req.method);
});
// iniciando o servidor na porta 8000
servidor.listen(PORT, () => {
  console.log(`Servidor rodando na porta, ${PORT}`);
});
