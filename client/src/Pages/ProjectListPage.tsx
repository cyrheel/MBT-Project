import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import SearchBar from "../Components/SearchBar";
// import ProjectItem from "../Components/ProjectItem";

function ProjectListPage() {
  // Helpers
  // const fakeData = [""];

  // State
  // const [projects, setProjects] = useState<string[]>([]);

  // Render
  return (
    <div className="flex flex-col w-full h-screen">
      <Navbar />
      <h2 className="flex items-center justify-center font-medium leading-tight text-4xl mt-0 mb-2 text-blue-600">
        Project List
      </h2>
      <SearchBar />
      {/*
      {projects.map((project) => 
        <ProjectItem {...project} />
      }
      */}
    </div>
  );
}

export default ProjectListPage;
