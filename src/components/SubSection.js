import React from "react";
import "./index.css";


const SubSection = () => {
  return(
    <div>
      <h2>Areas of Focus</h2>
      <div className="grid-container">
        <div className="grid-item">Ruby/Rails</div>
        <div className="grid-item">Javascript/React</div>
        <div className="grid-item">Digital Marketing Stragegy</div>
        <div className="grid-item">Marketing Campaign Design</div>
      </div>
      <h2>Previous Clients and Employers</h2>
      <div className="grid-container">
        <div className="grid-item">American Standard</div>
        <div className="grid-item">Nvent</div>
        <div className="grid-item">Rakuten</div>
        <div className="grid-item">FitLife</div>
        <div className="grid-item">TNE Lab</div>
      </div>
    </div>
  )
}

export default SubSection;
