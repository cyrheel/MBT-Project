import React from "react";
import Navbar from "../Components/Navbar";
import { useGetProject } from "../hooks/useGetProject";
import ProjectList from "../Components/ProjectList";

const ProjectListPage = () =>
{
  const projects = useGetProject();
  return (
    <div>
      <Navbar />
      <ProjectList projects={projects || []}/>
    </div>
  );
}

export default ProjectListPage;
