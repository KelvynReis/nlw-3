//inportar dependencia
const express = require('express');
//iniciando o express
const server = express()

//criar uma rota
server.get('/', (request, response) =>{
    return response.send('oi direto do back-and');
})

//ligar o servidor
server.listen(5500)