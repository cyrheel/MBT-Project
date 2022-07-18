const { ApolloError } = require('apollo-server');
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
        (await db.user.verifyPassword(args.hashedPassword, user.hashedPassword))
      ) {
        const token = jwt.sign({ user: user.email }, process.env.JWT_KEY);
        return token;
      } else {
        throw new ApolloError('Invalid credentials');
      }
    },
  },
};
