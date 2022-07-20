const db = require('../../db');
const argon2 = require('argon2');
const { ApolloError } = require('apollo-server');
//DONE : USER IS DONE! ✅ (LOGIN IS MISSING)

//* ---------------- OPTIONS HASHING PASSWORD ---------------- *//
const hashingOptions = {
  memoryCost: 2 ** 16,
  timeCost: 5,
  type: argon2.argon2id,
};

//* ---------------- HASH PASSWORD ---------------- *//

const hashPassword = (plainPassword: string) => {
  return argon2.hash(plainPassword, hashingOptions);
};

//* ---------------- CHECK PASSWORD ---------------- *//
export const verifyPassword = (
  plainPassword: string,
  hashedPassword: string
) => {
  return argon2.verify(hashedPassword, plainPassword, hashingOptions);
};

export const users = {
  //* ----------------  USER QUERIES  ---------------- *//
  Query: {
    //? GET ALL USERS
    getAllUsers: async (parents: any, args: any, context: any, info: any) => {
      if (context.authenticatedUserEmail) {
        return await db.User.findMany({
          include: {
            Projects: true,
            Tickets: true,
          },
        });
      } else {
        throw new ApolloError('Invalid auth');
      }
    },

    //? GET A USER
    getUserById: async (_: any, args: any) => {
      return await db.User.findUnique({
        where: { id: Number(args.id) },
        include: {
          Projects: true,
          Tickets: true,
        },
      });
    },
  },
  //* ----------------  USER MUTATIONS  ---------------- *//
  Mutation: {
    //? CREATE A NEW USER
    createNewUser: async (_: any, args: any) => {
      const hashedPassword = await hashPassword(args.hashedPassword);
      return await db.User.create({
        data: {
          name: args.name,
          email: args.email,
          hashedPassword,
          role: args.role,
        },
      });
    },

    //? UPDATE A USER
    updateUserById: async (_: any, args: any) => {
      await db.User.findUnique({
        where: { id: Number(args.id) },
      });
      return await db.User.update({
        where: { id: Number(args.id) },
        data: {
          name: args.name,
          email: args.email,
          hashedPassword: args.hashedPassword,
          role: args.role,
          avatar: args.avatar,
        },
      });
    },

    //? DELETE A USER
    deleteUserById: async (_: any, args: any) => {
      return await db.User.delete({
        where: { id: Number(args.id) },
      });
    },
  },
};
