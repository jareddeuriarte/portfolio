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

            {/* <div id="img-container">
                <a className="wrapper" target="_blank" rel="noopener noreferrer" href="https://petermodavis.github.io/provisions/">
                    <img alt="provisions-project" src="images/provisions.png"/>
                    <img alt="screenshot" src="images/provisions-screenshot.png" className="img-top"/>
                </a>
                <div>provisions</div><a target="_blank" rel="noopener noreferrer" href="https://github.com/jareddeuriarte/provisions">github</a>
            </div> */}

            {/* <div id="img-container">
                <a className="wrapper" target="_blank" rel="noopener noreferrer" href="https://jareddeuriarte.github.io/weather-dashboard/">
                    <img alt="weather-dashboard" src="images/weather-dashboard.png"/>
                    <img alt="screenshot" src="images/weather-dash-screenshot.png" className="img-top"/>
                </a>
                <div>weather dashboard</div><a target="_blank" rel="noopener noreferrer" href="https://github.com/jareddeuriarte/weather-dashboard">github</a>
            </div>

            <div id="img-container">
                <a className="wrapper" target="_blank" rel="noopener noreferrer" href="https://jareddeuriarte.github.io/password-generator/">
                    <img alt="pasword-generator" src="images/password-generator.png"/>
                    <img alt="screenshot" src="images/password-generator-screenshot.png" className="img-top"/>
                </a>
                <div>password generator</div><a target="_blank" rel="noopener noreferrer" href="https://github.com/jareddeuriarte/password-generator">github</a>
            </div> */}

        




   
    </div>
  );
}

export default Project;
