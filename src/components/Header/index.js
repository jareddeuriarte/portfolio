import React from "react";
import "./style.css";


function Header() {
  return (
    
    <div id='header'>
      <img id='pic-of-me' alt="me!" src="images/pic-of-me.jpg"></img>
      <h1 id="name">Jared de Uriarte</h1>
      <h2 id="web-dev">web developer</h2>
      <p id="bio">Drawn to that magic where creativity and problem solving meet—coding.
      If I'm not in front of a screen and on the internet, I'm either on my bike, attending to my plants,
      or listening to <a className="breakFree" target="_blank" rel="noopener noreferrer"
          href="https://www.youtube.com/watch?v=FN5EJz9lMuM"><span>'Break Free'</span></a> by Ariana Grande.</p>
    </div>
  );
}

export default Header;

// Break Free video rotation
// https://www.youtube.com/watch?v=Oty8XpxToas