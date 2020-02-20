import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./NavBar"
import header from "../public/assets/header.png" 



const Home = () => {
  return(
    <div>
      <h1>FULL-STACK WEB DEVELOPER AND DIGITAL STRATEGIST.</h1>
      <NavBar />
      <h2>Little bit about me and who I am.</h2>
      <img src={header} alt="Header" />
    </div>

  )
}

export default Home;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Home />, wrapper) : false;
