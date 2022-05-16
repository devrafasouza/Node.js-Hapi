'use strict';


//Importando a biblioteca
const Hapi = require('@hapi/hapi');


//Criando o servidor do objeto hapi

const init = async () => {
  const server = new Hapi.Server({
    port: 3000,
    host: 'localhost'
  });

  //Criando rotas
  server.route({
    method: 'GET',
    path: '/',
    handler: function (request, h) {
      return 'Hello Word!';
    }
  });
  

  await server.start();
  console.log('Server running on %s', server.info.uri);
}

process.on('unhadledRejection', (err) => {
  console.log(err);
  process.exit(1);

})

init();








