import React from "react";
// import Tabs from '@material-ui/core/Tabs';
// import AppBar from '@material-ui/core/AppBar';
// import Tab from '@material-ui/core/Tab';
import "./index.css";




const NavBar = () => {
 return(
     <>
   <ul>
  <li><a href="default.asp" >Home</a></li>
  <li><a href="news.asp">News</a></li>
  <li><a href="contact.asp">Contact</a></li>
  <li><a href="about.asp">About</a></li>
</ul>
  </>
 )
}

export default NavBar;


{/* <AppBar position="static" className="navBar">
<Tabs value="0" >
  <Tab className="navBar" label="Home" value="0"/>
  <Tab className="navBar" label="Bio" value="0"/>
  <Tab className="navBar" label="Projects" value="0"/>
  <Tab className="navBar" label="Contact" value="0"/>
</Tabs>
</AppBar> */}