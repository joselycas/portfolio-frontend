import React from "react";


const Header = () => {
  return(
    <header>
      <div className="row">
        <div className="column">
            <img src="assets/header.png" alt="Header" />      
        </div>
        <div className="column">
            <h2 className="title">FULL-STACK WEB DEVELOPER AND DIGITAL STRATEGIST.</h2>
            <div className="buttonHolder">
              <button>PROJECTS</button>
            </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
