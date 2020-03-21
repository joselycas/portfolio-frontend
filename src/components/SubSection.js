import React from "react";
import "./index.css";


const SubSection = () => {
  return(
    <div>
      <h1><center>Areas of Focus</center></h1>
      <div className="row">
        <div className="column">
          <p>Ruby/Rails</p><p>My projects are built with Ruby on Rails specifically for the backend of my applications. </p></div>
        <div className="column">
          <p>Javascript/React</p><p>The client-side of my projects are built using React framework with Redux for better management. </p></div>
        <div className="column">
          <p>CSS/Bootstrap</p> <p>The style of my projects are either manually designed or by using bootstrap. </p></div>
        <div className="column"><p>Marketing Campaign and Web Design</p><p>Eight years of experience helping companies get their products out in the market through strategically planned digital channels. </p></div>
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

// <div>
// <h1><center>Areas of Focus</center></h1>
// <div className="row">
//   <div className="column">Ruby/Rails</div>
//   <div className="column">Javascript/React</div>
//   <div className="column">Digital Marketing Stragegy</div>
//   <div className="column">Marketing Campaign Design</div>
// </div>
// <h2>Previous Clients and Employers</h2>
// <div className="row">
//   <div className="column">American Standard</div>
//   <div className="column">Nvent</div>
//   <div className="column">Rakuten</div>
//   <div className="column">FitLife</div>
//   <div className="column">TNE Lab</div>
// </div>
// </div>