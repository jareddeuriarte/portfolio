import React from "react";
import "./style.css";


function Header() {
  return (
    <div>
      <img alt="me!" src="images/pic-of-me.jpg"></img>
      <h3 id="name">Jared de Uriarte</h3>
      <h6 id="philly">Philadelphia</h6>
      <p id="bio"> Web developer drawn to that magic where creativity and problem solving meet—coding.
      If I'm not in front of a screen and on the internet, I'm either on my bike, attending to my plants,
      or listening to <a className="breakFree" target="_blank" rel="noopener noreferrer"
          href="https://www.youtube.com/watch?v=FN5EJz9lMuM"><span>'Break Free'</span></a> by Ariana Grande.</p>

    </div>
  );
}

export default Header;




// Break Free video rotation
// https://www.youtube.com/watch?v=Oty8XpxToas