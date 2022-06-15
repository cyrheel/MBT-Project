import React from "react";
import Navbar from "../Components/Navbar";
import { useGetProject } from "../Hooks/useGetProject";
import ProjectList from "../Components/ProjectList";
import IProjet from "../Interfaces/IProject";
import { pageWrapper } from "../Styles/style";

const ProjectListPage = (): JSX.Element => {
  const projects: IProjet[] = useGetProject();
  return (
    <div {...pageWrapper}>
      <Navbar />
      <ProjectList projects={projects || []} />
    </div>
  );
};

export default ProjectListPage;
