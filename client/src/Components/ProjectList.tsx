import React from "react";
import IProjet from "../Interfaces/IProject";
import ProjectItem from "./ProjectItem";
import { projectListWrapper } from "../Styles/style";

const ProjectList = (props: IProjet[] | any): JSX.Element => {
  return (
    <div {...projectListWrapper}>
      {props.projects.map((project: IProjet) => (
        <ProjectItem {...project} key={project.id} />
      ))}
    </div>
  );
};

export default ProjectList;
