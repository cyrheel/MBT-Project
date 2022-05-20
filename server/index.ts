import typeDefs from './gql/schema';
import { projects } from './gql/resolvers/projects';
import { tickets } from './gql/resolvers/tickets';
import { users } from './gql/resolvers/users';

const { ApolloServer } = require('apollo-server');

const server = new ApolloServer({
  typeDefs,
  resolvers: [projects, tickets, users],
});

server.listen().then(() => {
  console.log(`
    Server is running! Listening on port http://localhost:4000/graphql
      `);
});
