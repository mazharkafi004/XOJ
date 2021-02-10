import React, { Component } from 'react';
import axios from "axios";

import Fab from '@material-ui/core/Fab';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button'
import "../index.css"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ReactModal from 'react-modal-resizable-draggable';
import useToken from '../Component/UseToken';

var tokenlog = "none";


class URIproblemView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      source_code:'',
      output: ``,
      language_id: '16',
      c_id: "1",
      cpp_id: "16",
      java_id: "21",
      python_id: "5"
    };
  }

  input = (event) => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  submit = async (e) => {
    e.preventDefault();
    let formData = {
      "source_code":this.state.source_code,
      "lang_id":this.state.language_id,
      "prob_id":this.props.match.params.probid
    }

    let token = localStorage.getItem('token');

    axios.post("http://localhost:8000/api/oj/URI/submit/",formData,
            {
              headers: {
                'Authorization': `token ${token}`
              }
            }).then((res) => {
      console.log(res.data)
    },(error) => {
      console.log(error);
    });

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
              name="source_code"
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
              <i class="fas fa-cog fa-fw"></i>Submit
            </button>

            <label for="tags" className="mr-1">
              <b className="heading">Language:</b>
            </label>
            <select
              value={this.state.language_id}
              onChange={this.input}
              id="tags"
              name="language_id"
              className="form-control form-inline mb-2 language"
            >
              <option value="16">C++</option>
              <option value="1">C</option>
              <option value="21">Java</option>
              <option value="5">Python</option>
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
