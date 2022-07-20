const express = require('express');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
//! Import for resolvers
import { auth } from './gql/resolvers/auth';
import { projects } from './gql/resolvers/projects';
import { tickets } from './gql/resolvers/tickets';
import { users } from './gql/resolvers/users';
import { typeDefs } from './gql/schema';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
//? initalize options for cors
const corsOptions = {
  origin: '*',
  credentials: true,
};

//? use cors with corsOptions in the server
app.use(cors(corsOptions));
app.use(cookieParser());

//? initialize ApolloServer
const server = new ApolloServer({
  typeDefs,
  resolvers: [projects, tickets, users, auth],
  //! create context for step up the token
  context: ({ res, req }: any) => {
    const token = req.headers.authorization;
    if (token) {
      let payload = null;
      try {
        payload = jwt.verify(token, process.env.JWT_KEY);
        return { authenticatedUserEmail: payload.user };
      } catch (err) {}
    } else {
      return { res };
    }
  },
  cors: false,
});

server.start().then(() => {
  server.applyMiddleware({ app, path: '/graphql', cors: false });
  app.listen({ port: 4000 }, () =>
    console.log(
      'Server is running! Listening on port http://localhost:4000/graphql'
    )
  );
});
