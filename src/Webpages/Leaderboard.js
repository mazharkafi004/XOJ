import React, { Component } from 'react'
import axios from 'axios'
import ReactTable from "react-table";
import 'react-table/react-table.css'
import { makeStyles } from '@material-ui/core/styles';
import "../Component/Styles.css"
import Fab from '@material-ui/core/Fab';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button'
import "../index.css"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
const useStyles = makeStyles({
    root: {
      width: '100%',
      sort: 'asc',
    },
    container: {
      maxHeight: 440,
      sort: 'asc',
    },
  });


class Leaderboard extends Component {


    constructor(props){
      super(props)
      this.state = {
        users: [],
        loading:true
      }
    }

    async getUsersData(){
      const res = await axios.get('http://localhost:8000/api/user/')
      console.log(res.data)
      this.setState({loading:false, users: res.data})
    }
    componentDidMount(){
      this.getUsersData()
    };


    render() {
      const columns = [{
        Header: 'Username',
        accessor: 'name',
        sort: 'asc',
        width: 200,

       }
       ,{
        Header: 'Email',
        accessor: 'email' ,
        sort: 'asc',
        width: 500,

        }


    ]
      return (

    <div>
   <div className="janina">
   <Link to="/problemlist"><Fab color="primary" >
    <ArrowBackIcon ></ArrowBackIcon>

  </Fab></Link>
   </div>
          <div className='box'>
            <h1><b>Highest scorers by solve count</b></h1>
            <ReactTable responsive className='table'
        data={this.state.users }

        columns={columns}
        defaultPageSize={8}
        pageSizeOptions={[4,8]}
     />
        </div>
    </div>
      )
    }
}

export default Leaderboard;
