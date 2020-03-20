import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./NavBar";
import SubSection from './SubSection.js';
import Footer from './Footer.js';




const Home = () => {
  return(
    <div>
       <img src="assets/logo.png" alt="Header" className="logo" />
      <NavBar />
      <img src="assets/header.png" alt="Header" className="headerImage" />
      <SubSection /> 
      <Footer/>
    </div>
  )
}

export default Home;
