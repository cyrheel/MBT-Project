import { typeDefs } from './gql/schema';
import { projects } from './gql/resolvers/projects';
import { tickets } from './gql/resolvers/tickets';
import { users } from './gql/resolvers/users';
import { auth } from './gql/resolvers/auth';
import * as dotenv from 'dotenv';
const jwt = require('jsonwebtoken');

dotenv.config();

const { ApolloServer } = require('apollo-server');

const server = new ApolloServer({
  typeDefs,
  resolvers: [projects, tickets, users, auth],
  //! création du context pour generer le token
  context: ({ req }: any) => {
    const token = req.headers.authorization;
    if (token) {
      let payload = null;
      try {
        payload = jwt.verify(token, process.env.JWT_KEY);
        return { authenticatedUserEmail: payload.user };
      } catch (err) {
        return { authenticatedUserEmail: null };
      }
    }
  },
});

server.listen().then(() => {
  console.log(`
    Server is running! Listening on port http://localhost:4000/graphql
      `);
});
