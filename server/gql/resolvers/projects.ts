const db = require('../../db');
import IUsers from '../Interfaces/IUsers';

//TODO : for projects : delete projects / update projects
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
      return await db.Project.create({
        data: {
          title: args.title,
          description: args.description,
          start_time: args.start_time,
          end_time: args.end_time,
          status: args.status,
          Project_Picture: args.Project_Picture,
          Users: {
            connect: args.Users.map(({ id }: any) => {
              return { id: Number(id) };
            }),
          },
        },
      });
    },

    //? UPDATE A PROJECT
    updateProjectById: async (_: any, args: any) => {
      return await db.Project.update({
        where: { id: Number(args.id) },
        data: {
          title: args.title,
          description: args.description,
          start_time: args.start_time,
          end_time: args.end_time,
          status: args.status,
          Project_Picture: args.Project_Picture,
        },
      });
    },

    //? DELETE A PROJECT
    deleteProjectById: async (_: any, args: any) => {
      return await db.Project.delete({
        where: { id: Number(args.id) },
      });
    },

    //? REMOVE USER FROM A PROJECT
    removeUserFromProject: async (_: any, args: any) => {
      return await db.Project.update({
        where: { id: Number(args.id) },
        data: {
          Users: {
            disconnect: args.Users?.map(({ id }: IUsers) => {
              return { id: Number(id) };
            }),
          },
        },
      });
    },

    //? ASSIGN USER TO A PROJECT
    assignUserToProject: async (_: any, args: any) => {
      return await db.Project.update({
        where: { id: Number(args.id) },
        data: {
          Users: {
            connect: args.Users?.map(({ id }: IUsers) => {
              return { id: Number(id) };
            }),
          },
        },
      });
    },
  },
};
