import React, { Component } from 'react';
import "../index.css"

class URIproblemView extends Component {
    render() {
      let url = "http://localhost:8000/api/oj/URI/"+ this.props.match.params.probid;
        return (
            <div className="box">
                <iframe src={url} width="100%" height="90%"></iframe>
            </div>
        );
    }
}

export default URIproblemView;
