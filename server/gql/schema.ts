const { gql } = require('apollo-server');
import { GraphQLScalarType } from 'graphql';
const db = require('../db');

const typeDefs = gql`
  scalar Date
  #//* ----------------  START DEFINING TYPES  ---------------- *//
  type User {
    id: ID!
    name: String!
    email: String!
    hashedPassword: String!
    role: String
    #//! Foreign Key
    #//* One To One
    User_Picture: Picture
    #//*  Many To Many
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
    #//! Foreign Key
    #//* One To One
    Project_Picture: Picture
    #//* One To Many
    Tickets: [Ticket]
    #//* Many To Many
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
    #//! Foreign Key
    #//* Many To One
    projectId: ID
    #//* Many To Many
    Comments: [Comment]
    Users: [User]
  }

  type Picture {
    id: ID!
    url: String!
    #//! Foreign Key
    #//* One To One
    Project: [Project]
    User: [User]
  }

  type Comment {
    id: ID!
    content: String!
    published_at: Date!
    modified_at: Date
    #//! Foreign Key
    #//* Many To Many
    Users: [User]
    Tickets: [Ticket]
  }
  #//* ----------------  END DEFINING TYPES  ---------------- *//

  #//* ----------------  START DEFINING QUERIES  ---------------- *//
  type Query {
    #//? USER QUERIES
    getAllUsers: [User]
    getUserById(id: ID): User

    #//? PROJECT QUERIES
    getAllProjects: [Project]
    getProjectById(id: ID): Project

    #//? TICKET QUERIES
    getAllTickets: [Ticket]
    getTicketById(id: ID): Ticket
  }
  #//* ----------------  END DEFINING QUERIES  ---------------- *//

  #//* ----------------  START DEFINING INPUTS  ---------------- *//
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

  input PictureInput {
    id: ID!
  }
  #//* ----------------  END DEFINING INPUTS  ---------------- *//

  #//* ----------------  START DEFINING MUTATIONS  ---------------- *//
  type Mutation {
    #//* ALL FUNCTION FOR USER
    #//? CREATE A NEW USER
    createNewUser(
      id: ID!
      name: String!
      email: String!
      hashedPassword: String!
      role: String
    ): User

    #//? UPDATE A USER
    updateUserById(
      id: ID!
      name: String
      email: String
      hashedPassword: String
      role: String
      picture_id: Int
      avatar: String
    ): User

    #//? DELETE A USER
    deleteUserById(id: ID!): User

    #//* ALL FUNCTION FOR PROJECT
    #//? CREATE A NEW PROJECT
    createNewProject(
      id: ID!
      title: String!
      description: String
      start_time: Date!
      end_time: Date
      status: String
      #//! Foreign Key
      #//* One To One
      Project_Picture: PictureInput
      #//* Many To Many
      Users: [UserInput]
    ): Project

    #// ? UPDATE A PROJECT
    updateProjectById(
      id: ID!
      title: String
      description: String
      start_time: Date
      end_time: Date
      status: String
      Users: [UserInput]
    ): Project

    #//? DELETE A PROJECT
    deleteProjectById(id: ID!): Project

    #//? REMOVE USER FROM A PROJECT
    removeUserFromProject(id: ID!): Project

    #//? ASSIGN USER TO A PROJECT
    assignUserToProject(id: ID!): Project

    #//* ALL FUNCTIONS FOR TICKET
    #//? CREATE A NEW TICKET
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
      #//! Foreign Key
      #//* Many To One
      #Project: ProjectInput
      projectId: Int
      #//* Many To Many
      #Comments: CommentInput
      Users: [UserInput]
    ): Ticket

    #//? UPDATE A TICKET
    updateTicketById(
      id: ID!
      title: String
      description: String
      estimated_time: Int
      spent_time: Int
      status: String
      labels: String
      priority: String
      difficulty: String
    ): Ticket

    #//? REMOVE USER FROM A TICKET
    removeUserFromTicket(id: ID!, Users: [UserInput]): Ticket

    #//? ASSIGN USER TO A TICKET
    assignUserToTicket(id: ID!, Users: [UserInput]): Ticket

    #//? DELETE A TICKET
    deleteTicketById(id: ID!): Ticket
  }
  #//* ----------------  END DEFINING MUTATIONS  ---------------- *//
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

export default typeDefs;

/*
{
  "createNewProjectId":"1",
  "title": "Mont Blanc Project",
  "description": "Create a new project test.",
  "startTime": "2022-05-17T00:00:00.000Z",
  "endTime": "2022-05-30T00:00:00.000Z",
  "status": "Active",
  "users": {
    "id": "1"
  },
}
*/
