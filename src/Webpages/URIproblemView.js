import React, { Component } from 'react';
import "../index.css";
import {Link,NavLink} from "react-router-dom";
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
          <div className="row container-fluid" width="100%" height="100%">
            <div className="col-6 ml-4" >
              <iframe src={url} width="100%" height="100%"></iframe>
            </div>
            <div className="col-5">
              <form>
                <label for="solution ">
                  <span className="badge badge-info heading mt-2 ">
                    <i className="fas fa-code fa-fw fa-lg"></i> Code Here
                  </span>
                </label>
                <textarea
                required
                name="source_code"
                id="source"
                className="source"
                ></textarea>
                <select
                name="lang_id"
                >
                <option value={this.state.c_id}>C</option>
                <option value={this.state.cpp_id}>C++</option>
                <option value={this.state.java_id}>Java</option>
                <option value={this.state.python_id}>Python</option>
                </select>
                <button>
                Submit
                </button>
              </form>
            </div>
          </div>
    );
  }
}

export default URIproblemView;
