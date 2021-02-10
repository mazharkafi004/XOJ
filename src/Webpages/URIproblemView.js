import React, { Component } from 'react';


import Fab from '@material-ui/core/Fab';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button'
import "../index.css"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ReactModal from 'react-modal-resizable-draggable';


class URIproblemView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: localStorage.getItem('input')||``,
      output: ``,
      language_id:localStorage.getItem('language_Id')|| 2,
      user_input: ``,
      c_id: "",
      cpp_id: "",
      java_id: "",
      python_id: ""
    };
  }

    render() {
      let url = "http://localhost:8000/api/oj/URI/"+ this.props.match.params.probid;
        return (
         
            <div>
                   <div className="janina">
 <Link to="/problemlisturi"><Fab color="primary" >
  <ArrowBackIcon ></ArrowBackIcon>
 
</Fab></Link>
 </div>
<div className="tb">
<div className="row container-fluid">
          <div className="col-6 ml-4 ">
            <label for="source">
            <h1><b>Code Here: </b></h1>
            </label>
            <textarea
              required
              name="solution"
              id="source"
              onChange={this.input}
              className="ytsource"
              value={this.state.input}
            ></textarea>

            <button
              type="submit"
              className="btn btn-danger ml-2 mr-2 "
              onClick={this.submit}
            >
              <i class="fas fa-cog fa-fw"></i> Run
            </button>

            <label for="tags" className="mr-1">
              <b className="heading">Language:</b>
            </label>
            <select
              value={this.state.language_id}
              onChange={this.language}
              id="tags"
              className="form-control form-inline mb-2 language"
            >
              <option value="54">C++</option>
              <option value="50">C</option>
              <option value="62">Java</option>
              <option value="71">Python</option>
            </select>
          </div>
        
        </div>
</div>

           
                <div className="box">
                <iframe src={url} width="100%" height="90%"></iframe>
            </div>
            </div>
        );
    }
}

export default URIproblemView;
