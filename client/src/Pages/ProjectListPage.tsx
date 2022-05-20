import React from "react";
import Navbar from "../Components/Navbar";
import { useGetProject } from "../hooks/useGetProject";
import ProjectList from "../Components/ProjectList";
import IProjet from "../Interfaces/IProject";

const ProjectListPage = (): JSX.Element => {
  const projects: IProjet[] = useGetProject();
  return (
    <div>
      <Navbar />
      <ProjectList projects={projects || []} />
    </div>
  );
};

export default ProjectListPage;
