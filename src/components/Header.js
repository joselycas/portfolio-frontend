import React from "react";
import "./index.css"

const Header = () => {
  return(
      <>
    <h1><center>Areas of Focus</center></h1>
    <div className="row">
      <div className="column">
        <h2>CSS/Bootstrap</h2> <p>The style of my projects are either manually designed or by using bootstrap. </p>
      </div>
      <div className="column">
        <h2>Marketing Campaign and Web Design</h2><p>Eight years of experience helping companies get their products out in the market through strategically planned digital channels. </p>
      </div>
 </div>
 </>
  )
}

export default Header;
