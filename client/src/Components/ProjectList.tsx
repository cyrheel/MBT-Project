import React from "react";
import { Project } from "../hooks/useGetProject";

interface ProjectsProps{
    projects : Project[]
}

const ProjectList : React.FC<ProjectsProps> = ({projects}: ProjectsProps) =>
{
    console.log(projects);
    
  return (
    <div>
        {projects.map(project => (
            <div key={project.id}>
              <p>{project.title}</p>
              <p>{project.description}</p>
              <div>
                <p>{project.start_time.toDateString()}</p>
                <p>{project.end_time.toDateString()}</p>
                <p>{project.status}</p>
                
              </div>
            </div>
        ))}
    </div>
  );
}

export default ProjectList;
