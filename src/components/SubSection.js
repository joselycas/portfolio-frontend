import React from "react";
import "./index.css";


const SubSection = () => {
  return(
    <div>
      <h1><center>Areas of Focus</center></h1>
      <div className="row">
        <div className="column">
          <h2>Ruby/Rails</h2><p>My projects are built with Ruby on Rails specifically for the backend of my applications. </p></div>
        <div className="column">
          <h2>Javascript/React</h2><p>The client-side of my projects are built using React framework with Redux for better management. </p></div>
        <div className="column">
          <h2>CSS/Bootstrap</h2> <p>The style of my projects are either manually designed or by using bootstrap. </p></div>
        <div className="column">
          <h2>Marketing Campaign and Web Design</h2><p>Eight years of experience helping companies get their products out in the market through strategically planned digital channels. </p></div>
      </div>
      <h1><center>Previous Clients and Employers</center></h1>
      <div className="rowLogo">
      <img src="assets/as.png" alt="Header" className="partnerLogo" />
      <img src="assets/nvent.png" alt="Header" className="partnerLogo" />
      <img src="assets/rakuten.png" alt="Header" className="partnerLogo" />
      <img src="assets/tne.png" alt="Header" className="partnerLogo" />
      <img src="assets/fitlife.png" alt="Header" className="partnerLogo" />
      </div>
    </div>
  )
}

export default SubSection;
