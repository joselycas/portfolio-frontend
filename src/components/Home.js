import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./NavBar";
import SubSection from './SubSection.js';
import Footer from './Footer.js';



const Home = () => {
  return(
    <div>
      <h1>FULL-STACK WEB DEVELOPER AND DIGITAL STRATEGIST.</h1>
      <NavBar />
      <img src="../public/assets/header.png" alt="Header" />
      <SubSection /> 
      <Footer/>
    </div>
  )
}

export default Home;


const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<Home />, wrapper) : false;
