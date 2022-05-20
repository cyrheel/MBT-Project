import React from "react";
import IProjet from "../Interfaces/IProject";

const ProjectList = (props: any) => {
  return (
    <div>
      {props.projects.map((project: IProjet) => (
        <div key={project.id}>
          <p>{project.title}</p>
          <p>{project.description}</p>
          <div>
            <p>{project.start_time.toString()}</p>
            <p>{project.end_time?.toString()}</p>
            <p>{project.status}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
