import React, { Component, Fragment } from 'react';
import "../index.css"
import {Link,NavLink} from "react-router-dom";
import Footer from "../Component/Footer.js"
import { blue } from '@material-ui/core/colors';
import { Container } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';

import SettingsIcon from '@material-ui/icons/Settings';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ListAltIcon from '@material-ui/icons/ListAlt';
import FilterListIcon from '@material-ui/icons/FilterList';
import InfoIcon from '@material-ui/icons/Info';
import Header from '../Component/Header';
import "../Component/Styles.css"

class Navigation extends Component {
    
    render() {
        return (
          <div className="App">
               <Container className="header first">
            <Header></Header>
  
              
           
            <div className="stand">
                
          
<Fab color="primary" >
  <AccountBoxIcon NavLink exact activeStyle={{color:'black'}} to="/profile"></AccountBoxIcon>
 
</Fab>

<Fab color="primary" >
  <ListAltIcon />
</Fab>

<Fab color="primary">
  <FilterListIcon  />
</Fab>

<Fab color="primary">
  <SettingsIcon />
</Fab>
            </div>
            
             
              

              
              
             <Footer />
             
             </Container>
              
          </div>
         
        );
    }
}

export default Navigation;