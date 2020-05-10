// React
import React from "react";
import ReactDOM from "react-dom";

// Components
import Header from "./Header"
import NavBar from "./NavBar";
import SubSection from './SubSection.js';
import Footer from './Footer.js';

// CSS
import './index.css';

const Home = () => {
  return(
    <div>
      <img src="assets/logo.png" alt="logo" className="logo" /> 
      <NavBar />
      <Header />
      <SubSection />
      <Footer/> 
    </div>
  )
}

export default Home;
