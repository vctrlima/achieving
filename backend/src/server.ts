import { createServer } from '@graphql-yoga/node';
import { schema } from './graphql/schema';

const server = createServer({ schema });

server.start();
