const { gql } = require('apollo-server');
import { GraphQLScalarType } from 'graphql';
const db = require('./db');

const typeDefs = gql`
  scalar Date
  # ----------------  START DEFINING TYPES ---------------- #
  type User {
    id: ID!
    name: String!
    email: String!
    hashedPassword: String!
    role: String!
    # FK
    # One To One
    User_Picture: Picture
    #  Many To Many
    Comments: [Comment]
    Projects: [Project]
    Tickets: [Ticket]
  }
  type Project {
    id: ID!
    title: String!
    description: String
    start_time: Date!
    end_time: Date
    status: String
    # FK
    # One To One
    Project_Picture: Picture
    # One To Many
    Tickets: [Ticket]

    # Many To Many
    Users: [User]
  }
  type Ticket {
    id: ID!
    title: String!
    description: String
    estimated_time: Int
    spent_time: Int
    status: String
    labels: String
    priority: String
    difficulty: String
    # FK
    # Many To One
    projectId: ID
    # Many To Many
    Comments: [Comment]
    Users: [User]
  }
  type Picture {
    id: ID!
    url: String!
    # FK
    # One To One
    Project: [Project]
    User: [User]
  }
  type Comment {
    id: ID!
    content: String!
    published_at: Date!
    modified_at: Date
    # FK
    # Many To Many
    Users: [User]
    Tickets: [Ticket]
  }
  # ----------------  END DEFINING TYPES ---------------- #

  # ----------------  START DEFINING QUERIES AND MUTATIONS ---------------- #
  type Query {
    # ----------------  USER QUERIES ---------------- #
    getAllUsers: [User]
    getUserById(id: ID): User
    # ----------------  PROJECT QUERIES ---------------- #
    getAllProjects: [Project]
    getProjectById(id: ID): Project
    # ----------------  TICKET QUERIES ---------------- #
    getAllTickets: [Ticket]
    getTicketById(id: ID): Ticket
  }

  input UserInput {
    id: ID!
  }
  input ProjectInput {
    id: ID!
  }
  input TicketInput {
    id: ID!
  }
  input CommentInput {
    id: ID!
  }

  type Mutation {
    createNewProject(
      id: ID!
      title: String!
      description: String
      start_time: Date!
      end_time: Date
      status: String
      # One To One
      # Project_Picture: Project_Picture
      # Many To Many
      Users: UserInput
    ): Project

    createNewTicket(
      id: ID!
      title: String!
      description: String
      estimated_time: Int
      spent_time: Int
      status: String
      labels: String
      priority: String
      difficulty: String
      # Many To One
      #Project: ProjectInput
      projectId: ID
      # Many To Many
      #Comments: CommentInput
      Users: UserInput
    ): Ticket
  }
  # ----------------  END DEFINING QUERIES AND MUTATIONS ---------------- #
`;

const dateScalar = new GraphQLScalarType({
  name: 'Date',
  parseValue(value: any) {
    return new Date(value);
  },
  serialize(value: any) {
    return value.toISOString();
  },
});

export const resolvers = {
  //* ----------------  START DEFINING RESOLVERS ---------------- *//
  Query: {
    //* ----------------  USER QUERIES ---------------- *//
    getAllUsers: async () => {
      return await db.User.findMany({
        include: {
          Projects: true,
          Tickets: true,
        },
      });
    },
    getUserById: async (_: any, args: any) => {
      return await db.User.findUnique({
        where: { id: Number(args.id) },
        include: {
          Projects: true,
          Tickets: true,
        },
      });
    },
    //* ----------------  PROJECT QUERIES ---------------- *//
    getAllProjects: async () => {
      return await db.Project.findMany({
        include: {
          Tickets: true,
          Users: true,
        },
      });
    },
    getProjectById: async (_: any, args: any) => {
      return await db.Project.findUnique({
        where: { id: Number(args.id) },
        include: {
          Tickets: true,
          Users: true,
        },
      });
    },
    //* ----------------  TICKET QUERIES ---------------- *//
    getAllTickets: async () => {
      return await db.Ticket.findMany({
        include: {
          Project: true,
          Comments: true,
          Users: true,
        },
      });
    },
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
  //* ----------------  END DEFINING RESOLVERS ---------------- *//

  //* ----------------  START DEFINING MUTATIONS ---------------- *//
  Mutation: {
    //* ----------------  CREATE PROJECT ---------------- //
    createNewProject: async (_: any, args: any) => {
      // Add getCurrentUser() && Get User's Infos
      const user = await db.User.findUnique({
        where: { id: Number(args.Users.id) },
      });
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
    //* ----------------  CREATE TICKET ---------------- //
    createNewTicket: async (_: any, args: any) => {
      const user = await db.User.findUnique({
        where: { id: Number(args.Users.id) },
      });
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
          // Project: {
          //   connect: {
          //     id: Number(args.Project.id),
          //   },
          // },
          projectId: Number(args.projectId),
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

export default typeDefs;
/*
{
  "createNewProjectId":"1",
  "title": "test",
  "description": "create project",
  "startTime": "2022-05-17T00:00:00.000Z",
  "endTime": "2022-05-30T00:00:00.000Z",
  "status": "inactive",
  "users": {
    "id": "1"
  },
}
*/
