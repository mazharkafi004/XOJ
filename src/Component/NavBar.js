import React, { ReactPropTypes } from 'react';
import './Styles.css'
import ListAltIcon from '@material-ui/icons/ListAlt';
import { Home } from "@material-ui/icons";
import Fab from '@material-ui/core/Fab';
class NavBar extends React.Component{
    render() {
        return (
           <nav className="navbar navbar-default fixed">
               <div className="container-fluid">
                   <div className="navbar-header">
                       <a className="navbar-brand" href="/home"><Fab color="primary" >
  <ListAltIcon /> 
</Fab>

                       </a>
                   </div>
                   <ul className="nav navbar-nav pull-right">
                      <a href="/signup">SignUp</a>
                       <a href="/signin">SignIn</a>
                      < a href="/signin">SignIn</a>

                   </ul>
               </div>

           </nav>
        );
    }
}

export default NavBar;