//! Import for resolvers
import { auth } from './gql/resolvers/auth';
import { projects } from './gql/resolvers/projects';
import { tickets } from './gql/resolvers/tickets';
import { users } from './gql/resolvers/users';
import { typeDefs } from './gql/schema';
//! ------------------------------------------------
import * as dotenv from 'dotenv';

const cors = require('cors');
const express = require('express');
const { ApolloServer, AuthenticationError } = require('apollo-server-express');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
//! ------------------------------------------------
dotenv.config();

const app = express();
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};
app.use(cors(corsOptions));
app.use(cookieParser());

const server = new ApolloServer({
  typeDefs,
  resolvers: [projects, tickets, users, auth],
  //! Création du context pour générer le token
  context: ({ res, req }: any) => {
    const token = req.headers.authorization;
    if (token) {
      let payload = null;
      try {
        payload = jwt.verify(token, process.env.JWT_KEY);
        return { authenticatedUserEmail: payload.user };
      } catch (err) {
        throw new AuthenticationError('Invalid token');
      }
    } else {
      return { res };
    }
  },
});

// server.applyMiddleware({ app, path: '/graphql', cors: false });

app.listen(4000, () => {
  console.log('Graphql app listening at http://localhost:4000/graphql');
});
// server.listen().then(() => {
//   console.log(`
//     Server is running! Listening on port http://localhost:4000/graphql
//       `);
// });
