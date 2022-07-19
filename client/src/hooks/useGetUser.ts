import { gql, useQuery } from "@apollo/client";
import IUser from "../Interfaces/IProject";

export const GET_USER = gql`
  query getAllUsers {
    getAllUsers {
      id
      name
    }
  }
`;

export const useGetUsers = (): IUser[] => {
  const { loading, error, data } = useQuery(GET_USER);
  if (loading) {
    return [];
  } else if (error) {
    console.log(error);
    return [];
  }
  return data.getAllUsers;
};
