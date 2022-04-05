const Hapi = require('@hapi/hapi');

const Init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

Init();
