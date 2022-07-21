import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation Mutation(
    # $createNewUserId: ID!
    $name: String!
    $email: String!
    $hashedPassword: String!
    $role: String
  ) {
    createNewUser(
      # id: $createNewUserId
      name: $name
      email: $email
      hashedPassword: $hashedPassword
      role: $role
    ) {
      id
      name
      email
      hashedPassword
      role
    }
  }
`;
