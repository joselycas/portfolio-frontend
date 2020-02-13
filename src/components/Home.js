import React from "react";
import ReactDOM from "react-dom";



const Home = () => {
  return(
    <div>
      <h1>FULL-STACK WEB DEVELOPER AND DIGITAL STRATEGIST.</h1>

    </div>

  )
}

export default Home;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Home />, wrapper) : false;
