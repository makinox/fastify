import fastify from 'fastify';

const server = fastify();

// Declare a route
server.get('/', async () => {
  return { hello: 'world' };
});

// Run the server!
const start = async () => {
  try {
    const result = await server.listen(3000);
    console.log(`Server listening at ${result}`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};
start();
