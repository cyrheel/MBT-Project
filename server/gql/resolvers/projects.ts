const db = require('../../db');

export const projects = {
  //* ----------------  PROJECT QUERIES  ---------------- *//
  Query: {
    //? GET ALL PROJECTS
    getAllProjects: async () => {
      return await db.Project.findMany({
        include: {
          Tickets: true,
        },
      });
    },

    //? GET A PROJECT
    getProjectById: async (_: any, args: any) => {
      return await db.Project.findUnique({
        where: { id: Number(args.id) },
        include: {
          Tickets: true,
          Users: true,
        },
      });
    },
  },
  //* ----------------  PROJECT MUTATIONS  ---------------- //
  Mutation: {
    //? CREATE A NEW PROJECT
    createNewProject: async (_: any, args: any) => {
      // Add getCurrentUser() && Get User's Infos
      const user = await db.User.findUnique({
        where: {
          id: Number(args.Users.id),
        },
        include: {
          Users: true,
        },
      });
      console.log(user.id);
      return await db.Project.create({
        data: {
          id: Number(args.id),
          title: args.title,
          description: args.description,
          start_time: args.start_time,
          end_time: args.end_time,
          status: args.status,
          Project_Picture: args.Project_Picture,
          Users: {
            connect: {
              id: user.id,
            },
          },
        },
      });
    },
  },
};
