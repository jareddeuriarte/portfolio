import React from "react";
import Project from '../Projects/index'
import "./style.css";
import projects from '../../projects.json'


function ProjectWrapper() {
  return (
    <div id="project-container">

      {projects.map(project => (
        <Project
        title={project.title}
        url={project.url}
        altTop={project.altTop}
        imageTop={project.imageTop}
        altBottom={project.altBottom}
        imageBottom={project.imageBottom}
        git={project.git}
        />
      ))}
      
    </div>
  );
}

export default ProjectWrapper;
