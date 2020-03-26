import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header"
import NavBar from "./NavBar";
import SubSection from './SubSection.js';
import Footer from './Footer.js';




const Home = () => {
  return(
    <div>
      <NavBar />
      <Header />
      <SubSection /> 
      <Footer/>
    </div>
  )
}

export default Home;
