import React from "react";
import "./index.css"

const Header = () => {
  return(
    <Header>
    <div className="row">
    <div className="column">
        <img src="assets/header.png" alt="Header" className="partnerLogo" />      
    </div>
    <div className="column">
        <h2>FULL-STACK WEB DEVELOPER AND DIGITAL STRATEGIST.</h2>
        <button>PROJECTS</button>
    </div>
    </div>
    </Header>
  )
}

export default Header;
