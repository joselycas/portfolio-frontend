import React from "react";
import Tabs from '@material-ui/core/Tabs';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';




const NavBar = () => {
 return(
     <>
    <AppBar position="static">
    <Tabs >
      <Tab label="Item One" />
      <Tab label="Item Two" />
      <Tab label="Item Three" />
    </Tabs>
  </AppBar>
  </>
 )
}

export default NavBar;