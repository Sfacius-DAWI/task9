import path from 'path';
import { fileURLToPath } from 'url';
import fastify from 'fastify';
import fastifyStatic from '@fastify/static';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = fastify({ logger: true });


app.register(fastifyStatic, {
  root: path.join(__dirname, 'dist'),
  prefix: '/',
});

app.register(fastifyStatic, {
  root: path.join(__dirname, 'img'),
  prefix: '/img/',
  decorateReply: false,
});

app.get('/', async (req, reply) => {
  return reply.sendFile('index.html');
});

app.get('/page2', async (req, reply) => {
  return reply.sendFile('index2.html');
});

app.get('/page3', async (req, reply) => {
  return reply.sendFile('index3.html');
});

app.get('/page4', async (req, reply) => {
  return reply.sendFile('index4.html');
});





const start = async () => {
  try {
    await app.listen({ port: 3000, host: '0.0.0.0' });
    app.log.info('Servidor corriendo en http://localhost:3000');
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();