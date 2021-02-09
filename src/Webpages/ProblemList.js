import React, { Component } from 'react'
import axios from 'axios'
import ReactTable from "react-table"; 
import 'react-table/react-table.css'
import { makeStyles } from '@material-ui/core/styles';
import "../Component/Styles.css"
import { Link } from 'react-router-dom';

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

export default class ProblemList extends Component {
 
    
  constructor(props){
    super(props)
    this.state = {
      users: [],
      loading:true
    }
  }
  
  async getUsersData(){
    const res = await axios.get('http://localhost:8000/api/oj/problist2/URI/')
    console.log(res.data)
    this.setState({loading:false, users: res.data})
  }
  componentDidMount(){
    this.getUsersData()
  };


  render() {
    
    const columns = [{  
      Header: 'OJ',  
      accessor: 'oj',
      sort: 'asc',
      width: 80,
     
     }
     ,{  
      Header: 'Problem ID',  
      accessor: 'prob-id' ,
      sort: 'asc',
      width: 100,
     
      }
     
     ,{  
     Header: 'Title',  
     accessor: 'prob-title' ,
     width: 210,
    
     }
     ,
     {  
     Header: 'View',  
     accessor: 'prob-title' ,
     width: 210,
     Cell: e =><a href={e.value}> <Link to="/urlproblem"><button onClick>View</button></Link> </a>
     }
     ,
  ]
    return (
    
      <div className='box'>
      
          <ReactTable responsive className='table' 
      data={this.state.users }  
      
      columns={columns}  
      defaultPageSize={8}
      pageSizeOptions={[4,8]}
   />
      </div>
    )
  }
}
