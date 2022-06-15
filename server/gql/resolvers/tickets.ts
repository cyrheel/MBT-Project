const db = require('../../db');
import IUser from '../Interfaces/IUsers';

//DONE : TICKETS DONE ✅!

export const tickets = {
  //* ----------------  TICKET QUERIES  ---------------- *//
  Query: {
    //? GET ALL TICKETS
    getAllTickets: async () => {
      return await db.Ticket.findMany({
        include: {
          Project: true,
          Comments: true,
          Users: true,
        },
      });
    },
    //? GET A TICKET
    getTicketById: async (_: any, args: any) => {
      return await db.Ticket.findUnique({
        where: { id: Number(args.id) },
        include: {
          Project: true,
          Comments: true,
          Users: true,
        },
      });
    },
  },
  //* ----------------  TICKET MUTATIONS  ---------------- //
  Mutation: {
    //? CREATE A TICKET
    createNewTicket: async (_: any, args: any) => {
      return await db.Ticket.create({
        data: {
          id: Number(args.id),
          title: args.title,
          description: args.description,
          estimated_time: args.estimated_time,
          spent_time: args.spent_time,
          status: args.status,
          labels: args.labels,
          priority: args.priority,
          difficulty: args.difficulty,
          projectId: Number(args.projectId),
          Users: {
            connect: args.Users.map(({ id }: any) => {
              return { id: Number(id) };
            }),
          },
        },
      });
    },

    //? UPDATE A TICKET
    updateTicketById: async (_: any, args: any) => {
      return await db.Ticket.update({
        where: { id: Number(args.id) },
        data: {
          title: args.title,
          description: args.description,
          estimated_time: args.estimated_time,
          spent_time: args.spent_time,
          status: args.status,
          labels: args.labels,
          priority: args.priority,
          difficulty: args.difficulty,
        },
      });
    },

    //? DELETE A TICKET
    deleteTicketById: async (_: any, args: any) => {
      return await db.Ticket.delete({
        where: { id: Number(args.id) },
      });
    },

    //? REMOVE USER FROM A TICKET
    removeUserFromTicket: async (_: any, args: any) => {
      return await db.Ticket.update({
        where: { id: Number(args.id) },
        data: {
          Users: {
            disconnect: args.Users?.map(({ id }: IUser) => {
              return { id: Number(id) };
            }),
          },
        },
      });
    },

    //? ASSIGN USER TO A TICKET
    assignUserToTicket: async (_: any, args: any) => {
      return await db.Ticket.update({
        where: { id: Number(args.id) },
        data: {
          Users: {
            connect: args.Users?.map(({ id }: IUser) => {
              return { id: Number(id) };
            }),
          },
        },
      });
    },
  },
};
