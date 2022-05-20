const db = require('../../db');

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
            connect: args.Users.map(({ id }) => {
              return { id: Number(id) };
            }),
          },
        },
      });
    },
    //? UPDATE A TICKET
    updateTicketById: async (_: any, args: any) => {
      const user = await db.User.findUnique({
        where: { id: Number(args.Users.id) },
      });
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
