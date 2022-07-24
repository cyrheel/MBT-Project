import { gql } from '@apollo/client';

// AccessToken

export const LOGIN = gql`
  mutation Login($email: String!, $hashedPassword: String!) {
    login(email: $email, hashedPassword: $hashedPassword)
  }
`;
