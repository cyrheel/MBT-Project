const { ApolloServer } = require('apollo-server');
import typeDefs from './schema';
import {resolvers} from './schema';

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(() => {
  console.log(`
    Server is running!
    Listening on port 4000
      `);
});