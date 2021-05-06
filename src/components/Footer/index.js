import React from "react";
import "./style.css";


function Footer() {
  return (
    <div id='footer'>
        <div className="row contact" id="contact">
            <div className="four columns">
                <div>954-751-9104‬</div>
            </div>
            <div className="four columns">
                <div><a href="deuriartejared@gmail.com">email</a></div>
            </div>

            <div className="four columns">
                <div><a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/jareddeuri">linkedin</a></div>
            </div>


            <div className="three columns links">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/jareddeuriarte">github</a>
            </div>


            <div className="three columns links">
                <a target="_blank" rel="noopener noreferrer" href="resume/deUriarteJared-resume.pdf">resume</a>
            </div>


        </div>
    </div>
  );
}

export default Footer;
