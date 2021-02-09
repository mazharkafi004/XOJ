import React, { Component } from 'react';
import "../index.css";
import {Link,NavLink} from "react-router-dom";
import ReactModal from 'react-modal-resizable-draggable';
class URIproblemView extends Component {
   

    render() {
        return (
            <div className="box">
              
                <iframe src="http://localhost:8000/api/oj/URI/1006"width="100%" height="90%"></iframe>
            </div>
        );
    }
}

export default URIproblemView;