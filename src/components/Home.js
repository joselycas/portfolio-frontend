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
      <NavBar />
      <Header />
      <SubSection />
      <Footer/> 
    </div>
  )
}

export default Home;
