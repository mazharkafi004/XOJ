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

export default class CFproblem extends Component {


  constructor(props){
    super(props)
    this.state = {
      users: [],
      loading:true
    }
  }

  async getUsersData(){
    const res = await axios.get('https://codeforces.com/api/problemset.problems')
    console.log(res.data)
    this.setState({loading:false, users: res.data.results.problems})
  }
  componentDidMount(){
    this.getUsersData()
  };


  render() {
    const columns = [{
      Header: 'ID',
      accessor: 'index',
      sort: 'asc',
      width: 80,

     }
     ,{
      Header: 'Problem ID',
      accessor: 'contestId' ,
      sort: 'asc',
      width: 100,

      }
, {Header: 'ID',
accessor: 'index',
sort: 'asc',
width: 80,

}
,
     ,{
     Header: 'Title',
     accessor: 'name' ,
     width: 210,

     }
     ,
     {
     Header: 'View',
     accessor: 'prob-id' ,
     width: 210,
     Cell: e =><a href={e.value}> <Link to={"/probshow/"+e.value}><button>View</button></Link> </a>
     }
     ,
  ]
    return (

  <div>
 <div className="janina">
 <Link to="/problemlist"><Fab color="primary" >
  <ArrowBackIcon ></ArrowBackIcon>
 
</Fab></Link>
 </div>
        <div className='box'>
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
