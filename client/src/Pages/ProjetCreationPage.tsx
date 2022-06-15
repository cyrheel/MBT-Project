import React from "react";
import Navbar from "../Components/Navbar";
import ProjectCreationForm from "../Components/ProjectCreationForm";
import { pageWrapper, h2Style } from "../Styles/style";

function ProjectCreationPage(): JSX.Element {
  return (
    <div {...pageWrapper}>
      <Navbar />
      <h2 {...h2Style}>Create Project</h2>
      <ProjectCreationForm />
    </div>
  );
}

export default ProjectCreationPage;
