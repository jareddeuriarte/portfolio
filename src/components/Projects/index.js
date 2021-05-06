import React from "react";
import "./style.css";


function Project(props) {
  return (
    <div id="project">
    
            <div id="img-container">
                <a className="wrapper" target="_blank" rel="noopener noreferrer" href={props.url}>
                    <img alt={props.altTop} src={props.imageTop}/>
                    <img alt={props.altBottom} src={props.imageBottom} className="img-top"/>
                </a>
                <div>{props.title}</div><a target="_blank" rel="noopener noreferrer" href={props.git}>github</a>
            </div>
   
    </div>
  );
}

export default Project;