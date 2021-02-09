import React, { Component } from 'react';
import "../index.css"

class URIproblemView extends Component {
    render() {
        return (
            <div className="box">
                <iframe src="http://localhost:8000/api/oj/URI/1003"width="100%" height="90%"></iframe>
            </div>
        );
    }
}

export default URIproblemView;