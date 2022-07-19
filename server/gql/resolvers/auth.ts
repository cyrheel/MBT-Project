import { verifyPassword } from './users';
const { ApolloError } = require('apollo-server-express');
const db = require('../../db');
const jwt = require('jsonwebtoken');

export const auth = {
  Query: {
    //? LOGIN
    login: async (parent: any, args: any, context: any, info: any) => {
      const user = await db.User.findUnique({
        where: {
          email: args.email,
        },
      });
      if (
        user &&
        (await verifyPassword(args.hashedPassword, user.hashedPassword))
      ) {
        const token = jwt.sign({ user: user.email }, process.env.JWT_KEY);
        context.res.cookie('token', token, {
          maxAge: 1000 * 60 * 60 * 24 * 7,
          httpOnly: true,
          secure: true,
        });
        return 'You are now logged in.';
      } else {
        throw new ApolloError('Invalid credentials');
      }
    },
  },
};
