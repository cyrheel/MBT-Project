import { gql } from "@apollo/client";

export const CREATE_TICKET = gql`
  mutation Mutation(
    $createNewTicketId: ID!
    $title: String!
    $description: String
    $status: String
    $labels: String
    $priority: String
    $difficulty: String
    $users: [UserInput]
    $projectId: Int
  ) {
    createNewTicket(
      id: $createNewTicketId
      title: $title
      description: $description
      status: $status
      labels: $labels
      priority: $priority
      difficulty: $difficulty
      Users: $users
      projectId: $projectId
    ) {
      id
      title
      description
      status
      labels
      priority
      difficulty
      Users {
        id
      }
      projectId
    }
  }
`;
