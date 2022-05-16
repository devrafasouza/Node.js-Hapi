'use strict';


//Importando a biblioteca
const Hapi = require('hapi');

//Criando o servidor do objeto hapi
const server = new Hapi.Server();
server.connection({ port: 3000 });

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});

//Criando rotas

server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    reply('Olá, mundo!');
  }

});

server.route({
  method: 'GET',
  path: '/{name}',
  handler: function (request, reply) {
    reply('Olá, ' + encodeURIComponent(request.params.name) + '!');
  }

});