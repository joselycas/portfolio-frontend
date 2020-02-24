import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./NavBar";
// import header from "../public/assets/header.png";



const Home = () => {
  return(
    <div>
      <h1>FULL-STACK WEB DEVELOPER AND DIGITAL STRATEGIST.</h1>
      <NavBar />
      <h2>Image</h2>
      <SubSection /> 
      <Footer/>
    </div>
  )
}

export default Home;


const SubSection = () => {
  return(
    <div>
      <h2>this is the sub section</h2>
    </div>
  )
}

const Footer = () => {
  return(
    <div>Footer</div>
  )
}

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<Home />, wrapper) : false;


{/* <img src={require('./public/assets/header.png')} alt="Header" /> */}