import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./NavBar"
import header from "../portfolio-frontend/public/assets/header.png"



const Home = () => {
  return(
    <div>
      <h1>FULL-STACK WEB DEVELOPER AND DIGITAL STRATEGIST.</h1>
      <NavBar />
      <h2>Little bit about me and who I am.</h2>
      <img src={require('header.png')} alt="Header" />
    </div>

  )
}

export default Home;

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<Home />, wrapper) : false;
