import React from "react";
import Project from '../Projects/index'
import "./style.css";
import projects from '../../projects.json'


function ProjectWrapper() {
  return (
    <div id="project-container">
      
        <Project
        title={projects[0].title}
        url={projects[0].url}
        altTop={projects[0].altTop}
        imageTop={projects[0].imageTop}
        altBottom={projects[0].altBottom}
        imageBottom={projects[0].imageBottom}
        git={projects[0].git}
        />

    </div>
  );
}

export default ProjectWrapper;
