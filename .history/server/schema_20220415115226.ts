const { gql } = require('apollo-server');
import { GraphQLScalarType } from 'graphql';

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
    project_Picture: Picture
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
    getUsers: [User]
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
})

export const resolvers = {
  Query: {
   getUsers: () => {
     console.log('getUsers');
     return [
       {
         id: 1,
         name: 'Brandon'
        },
]
   }
}
}

export default typeDefs;