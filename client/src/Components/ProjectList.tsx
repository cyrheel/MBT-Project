import React, { useEffect } from "react";
import IProjet from "../Interfaces/IProject";
import ProjectItem from "./ProjectItem";
import { projectListWrapper } from "../Styles/style";

const ProjectList = (props: IProjet[] | any): JSX.Element => {

  //add number of users and days left
  const addValue = (props: IProjet[]): IProjet[] => {
    for(let i = 0; i < props.length; i++){
      props[i].numUsers = props[i].user_id.length;
      props[i].nbTicket = (props[i].Tickets || []).length;
      props[i].daysLeft = ((props[i].end_time || props[i].start_time).getDate() - props[i].start_time.getDate()).toString();
    }
    return props
  }
  useEffect(() => {
    addValue(props)
  });
  return (
    <div className="bg-slate-100 grid justify-items-center">
      {props.projects.map((project: IProjet) => (
        <ProjectItem {...project} key={project.id} />
      ))}
    </div>
  );
};

export default ProjectList;
