const { gql } = require('apollo-server');
import { GraphQLScalarType } from 'graphql';
const db = require('./db');

const typeDefs = gql`
  scalar Date
  type User {
    id: ID!
    name: String!
    email: String!
    hashedPassword: String!
    role: String!

    # FK
    user_project: Project
    user_ticket: Ticket
    user_picture: Picture
  }
  type Project {
    id: ID!
    title: String!
    description: String!
    start_time: Date!
    end_time: Date!
    status: String!

    # FK
    project_user: User
    project_ticket: Ticket
    project_picture: Picture
  }

  type Ticket {
    id: ID!
    title: String!
    description: String!
    estimated_time: Int!
    spent_time: Int!
    status: String!
    priority: String!
    difficulty: String!

    # FK
    ticket_user: User
    ticket_comment: Comment
  }

  type Picture {
    id: ID!
    url: String!

    # FK
    picture_project: Project
    picture_user: User
  }

  type Comment {
    id: ID!
    content: String!
    published_at: Date!
    modified_at: Date!

    # FK
    comment_user: User
  }

  type Query {
    getAllUsers: [User]
    getUserById(id: ID): User
  }

  input UserInput {
    id: ID
  }

  type Mutation {
    createNewProject(
      id: ID
      title: String
      description: String
      start_time: Date
      end_time: Date
      status: String
      user: UserInput
    ): Project
  }
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
  Query: {
    getAllUsers: async () => {
      return await db.User.findMany();
    },
    getUserById: async (_: any, args: any) => {
      return await db.User.findUnique({ where: { id: Number(args.id) } });
    },
  },

  Mutation: {
    // Create a new project
    createNewProject: async (_: any, args: any) => {
      const user = await db.User.findUnique({
        where: { id: Number(args.user.id) },
      });
      return await db.Project.create({
        data: {
          id: Number(args.id),
          title: args.title,
          description: args.description,
          start_time: args.start_time,
          end_time: args.end_time,
          status: args.status,
          user_id: user.id,
        },
      });
    },
  },
};

export default typeDefs;
/*
{
  "createNewProjectId":"7",
  "title": "test",
  "description": "create project",
  "startTime": "2022-05-17T00:00:00.000Z",
  "endTime": "2022-05-30T00:00:00.000Z",
  "status": "inactive",
  "user": {
    "id": "1"
  }
}
*/
