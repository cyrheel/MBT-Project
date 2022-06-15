import React from "react";
import IProjet from "../Interfaces/IProject";
import {
  projectItemWrapper,
  projectHeaderStyle,
  projectBodyStyle,
} from "../Styles/style";

function ProjectItem(project: IProjet): JSX.Element {
  return (
    <div {...projectItemWrapper}>
      <div {...projectHeaderStyle}>
        <p>{project.title}</p>
        <p>{project.start_time.toString()}</p>
      </div>
      <div {...projectBodyStyle}>
        <p>{project.description}</p>
        <p>{project.end_time?.toString()}</p>
        <p>{project.status}</p>
      </div>
    </div>
  );
}

export default ProjectItem;
