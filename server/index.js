import Fastify from 'fastify';

const f = Fastify({ logger: true });

f.get('/api', async (request, reply) => {
  return { hello: 'world' };
});

async function start() {
  try {
    await f.listen({ port: 5000, host: '0.0.0.0' });
  } catch (error) {
    f.log.error(error);
    process.exit(1);
  }
}

start();