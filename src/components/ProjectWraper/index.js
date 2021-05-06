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

      {/* <Project
        title={projects[0].title}
        url={projects[0].url}
        altTop={projects[0].altTop}
        imageTop={projects[0].imageTop}
        altBottom={projects[0].altBottom}
        imageBottom={projects[0].imageBottom}
        git={projects[0].git}
      />

      <Project
        title={projects[1].title}
        url={projects[1].url}
        altTop={projects[1].altTop}
        imageTop={projects[1].imageTop}
        altBottom={projects[1].altBottom}
        imageBottom={projects[1].imageBottom}
        git={projects[1].git}
      />

      <Project
        title={projects[2].title}
        url={projects[2].url}
        altTop={projects[2].altTop}
        imageTop={projects[2].imageTop}
        altBottom={projects[2].altBottom}
        imageBottom={projects[2].imageBottom}
        git={projects[2].git}
      /> */}

    </div>
  );
}

export default ProjectWrapper;
