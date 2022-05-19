import React from "react";
import Navbar from "../Components/Navbar";
import ProjectCreationForm from "../Components/ProjectCreationForm";

function ProjectCreationPage() {
  return (
    <div>
      <Navbar />
      <h1>Create Project</h1>
      <ProjectCreationForm />
    </div>
  );
}

export default ProjectCreationPage;
