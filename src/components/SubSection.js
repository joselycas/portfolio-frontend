import React from "react";


const SubSection = () => {
  return(
    <section>
      <div className="subSection">
        <h1 className= "title">Areas of Focus</h1>
        <div className="row">
          <div className="column">
            <h2>Ruby/Rails</h2><p>My projects are built with Ruby on Rails specifically for the backend of my applications. </p>
          </div>
          <div className="column">
            <h2>Javascript/React</h2><p>The client-side of my projects are built using React framework with Redux for better management. </p>
          </div>
          <div className="column">
            <h2>CSS/Bootstrap</h2> <p>The style of my projects are either manually designed or by using bootstrap. </p>
          </div>
          <div className="column">
            <h2>Marketing Campaign and Web Design</h2><p>Eight years of experience helping companies get their products out in the market through strategically planned digital channels. </p>
          </div>
        </div>
      </div>
      <div className="partnerLogo">
        <div>
          <h1 className= "title">Previous Clients and Employers</h1>
          <div className="container">
            <img src="assets/as.png" alt="american standard logo" />
            <img src="assets/nvent.png" alt="nvent logo" />
            <img src="assets/rakuten.png" alt="rakuten logo" />
            <img src="assets/tne.png" alt="tne lab logo" />
            <img src="assets/fitlife.png" alt="fit life logo" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SubSection;
