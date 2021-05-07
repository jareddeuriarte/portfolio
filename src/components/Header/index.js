import React from "react";
import "./style.css";


function Header() {
  return (
    
    <div id='header'>
      <div id='bio'>
      <h1 id="name">Jared de Uriarte</h1>
      <h2 id="web-dev">web developer</h2>
      <p id="bio"><span>Drawn to that magic where creativity and problem solving meet—coding.
      If I'm not in front of a screen and on the internet, I'm either on my bike, attending to my plants,
      or listening to<a className="breakFree" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=FN5EJz9lMuM"> 'Break Free' </a>by Ariana Grande.</span></p>
      
      
      <a target="_blank" rel="noopener noreferrer" href='https://github.com/jareddeuriarte'><i className="fa">&#xf09b;</i></a>
      
    
    
    
    </div>

      <img id='pic-of-me' alt="me!" src="images/pic-of-me.jpg"></img>

    </div>
  );
}

export default Header;

// Break Free video rotation
// https://www.youtube.com/watch?v=Oty8XpxToas