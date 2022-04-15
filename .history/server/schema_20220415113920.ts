const { gql } = require('apollo-server');
import { GraphQLScalarType } from 'graphql';

const typeDefs = gql`



  
 

 
`;

// const dateScalar = new GraphQLScalarType({
//   name: 'Date',
//   parseValue(value: any) {
//     return new Date(value);
//   },
//   serialize(value: any) {
//     return value.toISOString();
//   },
// })

// const resolvers = {
//   Query: {
//    'hello': () => 'Hello world!',
//   },
// }

export default typeDefs