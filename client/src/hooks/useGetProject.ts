import {gql, useQuery} from "@apollo/client";

const GET_PROJECT = gql`
    query querytest {
        getAllProjects {
          id,
          title,
          description,
          start_time,
          end_time,
          status,
          user_id,
          ticket_id,
          picture_id,
      }
  }
}`

export const useGetProject = (): Project[] => {
    const {data} = useQuery(GET_PROJECT,{});
    return data
}

export interface Project {
    id: number,
    title: string,
    description: string,
    start_time: Date,
    end_time: Date,
    status:string,
    user_id:number,
    ticket_id:number,
    picture_id:number,
}