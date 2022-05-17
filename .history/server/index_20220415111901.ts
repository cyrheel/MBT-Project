const { ApolloServer } = require('apollo-server');
import typeDefs from './schema';
import dateScalar from './schema';

const server = new ApolloServer({ typeDefs, resolvers: {Date: dateScalar} });

server.listen().then(() => {
  console.log(`
    Server is running!
    Listening on port 4000
  `);
});