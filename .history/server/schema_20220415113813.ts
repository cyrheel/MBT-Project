const { gql } = require('apollo-server');
import { GraphQLScalarType } from 'graphql';

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    hashedPassword: String!
    role: String!
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

// const resolvers = {
//   Query: {
//    'hello': () => 'Hello world!',
//   },
// }

export default {typeDefs, dateScalar}