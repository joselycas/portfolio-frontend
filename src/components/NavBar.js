import React from "react";
import Tabs from '@material-ui/core/Tabs';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';

const NavBar = () => {
 return(
     <>
    <AppBar position="static">
    <Tabs value="0" >
      <Tab label="Home" value="0"/>
      <Tab label="Projects" value="0"/>
      <Tab label="Contact" value="0"/>
    </Tabs>
  </AppBar>
  </>
 )
}

export default NavBar;