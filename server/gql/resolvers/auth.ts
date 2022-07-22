import { verifyPassword } from './users';
import { ApolloError } from 'apollo-server';
const db = require('../../db');
const jwt = require('jsonwebtoken');

export const auth = {
  Mutation: {
    //? LOGIN
    login: async (parent: any, args: any, context: any, info: any) => {
      //! get user from db with unique email
      const user = await db.User.findUnique({
        where: {
          email: args.email,
        },
      });
      //! compare if the password is correct
      if (
        user &&
        (await verifyPassword(args.hashedPassword, user.hashedPassword))
      ) {
        const token = jwt.sign(
          {
            user: user.email,
          },
          process.env.JWT_KEY,
          {
            expiresIn: '1h',
            algorithm: 'HS256',
          }
        );
        //! set up cookie with the token
        context.res.cookie('token', token, {
          maxAge: 1000 * 60 * 60 * 24 * 7,
          httpOnly: true,
          secure: true,
        });
        // Return the user c'est ici qu'on doit renvoyer le user (mais avec toutes les datas)
        return token;
      } else {
        throw new ApolloError('Invalid credentials');
      }
    },
  },
};
