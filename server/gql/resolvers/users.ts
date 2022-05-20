const db = require('../../db');

export const users = {
  //* ----------------  USER QUERIES  ---------------- *//
  Query: {
    //? GET ALL USERS
    getAllUsers: async () => {
      return await db.User.findMany({
        include: {
          Projects: true,
          Tickets: true,
        },
      });
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
    //? UPDATE A USER
    updateUserById: async (_: any, args: any) => {
      const user = await db.User.findUnique({
        where: { id: Number(args.id) },
      });
      return await db.User.update({
        where: { id: Number(args.id) },
        data: {
          name: args.name,
          email: args.email,
          hashedPassword: args.hashedPassword,
          role: args.role,
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
