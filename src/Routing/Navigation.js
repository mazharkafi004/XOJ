import React, { Component, Fragment } from 'react';
import "../index.css"
import {Link,NavLink} from "react-router-dom";
import Footer from "../Component/Footer.js"
import { blue } from '@material-ui/core/colors';
import { Container } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ListAltIcon from '@material-ui/icons/ListAlt';
import FilterListIcon from '@material-ui/icons/FilterList';
import InfoIcon from '@material-ui/icons/Info';
import Header from '../Component/Header';
import "../Component/Styles.css"
import NavBar from '../Component/NavBar';

class Navigation extends Component {
    
    render() {
        return (
          <div className="App">
               <Container className="header first">
                 
          
        <Header></Header>
  
              
           
            <div className="stand">
            <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button className="stand"  color="primary" {...bindTrigger(popupState)}>
          <Fab color="primary" >
  <MenuIcon ></MenuIcon>
 
</Fab>
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}><Link to="/profile"><Fab color="primary" >
  <AccountBoxIcon ></AccountBoxIcon>
 
</Fab></Link></MenuItem>
            <MenuItem onClick={popupState.close}><Link to="/problemlist"><Fab color="primary" >
  <ListAltIcon /> 
</Fab></Link></MenuItem>



<MenuItem onClick={popupState.close}><Link to="/compiler"><Fab color="primary">
  <FilterListIcon  />
</Fab></Link> </MenuItem>
<MenuItem onClick={popupState.close}><Link to="/faqs"><Fab color="primary">
  <SettingsIcon />
</Fab></Link></MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState> 
          









            </div>
            
             
              

              
              
             <Footer />
             
             </Container>
              
          </div>
         
        );
    }
}

export default Navigation;