import React, { Component } from 'react';


import Fab from '@material-ui/core/Fab';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button'
import "../index.css"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ReactModal from 'react-modal-resizable-draggable';
class URIproblemView extends Component {
   

    render() {
      let url = "http://localhost:8000/api/oj/URI/"+ this.props.match.params.probid;
        return (
         
            <div>
                   <div className="janina">
 <Link to="/problemlisturi"><Fab color="primary" >
  <ArrowBackIcon ></ArrowBackIcon>
 
</Fab></Link>
 </div>
                <div className="box">
                <iframe src={url} width="100%" height="90%"></iframe>
            </div>
            </div>
        );
    }
}

export default URIproblemView;
