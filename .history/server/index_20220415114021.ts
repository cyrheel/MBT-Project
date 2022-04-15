const { ApolloServer } = require('apollo-server');
import typeDefs from './schema';

const server = new ApolloServer({ typeDefs });

server.listen().then(() => {
  console.log(`
    Server is running!
    Listening on port 4000
  `);
});