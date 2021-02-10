import React, { Component } from 'react';
import {Link,NavLink} from "react-router-dom";
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';import "../index.css"
class ContactUs extends Component {
    componentDidMount() {
        document.title = 'Contact US';
      }
    render() {
        return (
          <div>
                <div className="cus">
                <h1><b>Contact US</b></h1>
                <h1 className="custard">Md. Mazharul Islam</h1>
                <div className="bro">
               
                <a href="https://www.facebook.com/TheLamist/" target="_blank"><Fab color="primary" >
  <FacebookIcon ></FacebookIcon>
 
</Fab>
        </a>
        <a href="https://github.com/mazharkafi004" target="_blank"><Fab color="primary" >
  <GitHubIcon ></GitHubIcon>
 
</Fab>
        </a>
        
        <a href="https://twitter.com/mazhar004" target="_blank"><Fab color="primary" >
  <TwitterIcon ></TwitterIcon>
 
</Fab>
        </a>
                </div>
          
            </div>
            <div className="cus">
               
                <h1 className="rash">Rashidul Hasan</h1>
                <div className="bro">
               
                <a href="https://www.facebook.com/rashidulhasan.rashid/" target="_blank"><Fab color="primary" >
  <FacebookIcon ></FacebookIcon>
 
</Fab>
        </a>
        <a href="https://github.com/rashid54" target="_blank"><Fab color="primary" >
  <GitHubIcon ></GitHubIcon>
 
</Fab>
        </a>
        
        <a href="#" target="_blank"><Fab color="primary" >
  <TwitterIcon ></TwitterIcon>
 
</Fab>
        </a>
                </div>
          
            </div>
          </div>
            
        );
    }
}

export default ContactUs;