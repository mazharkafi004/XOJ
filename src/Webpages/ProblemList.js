import React, { Component } from 'react'
import axios from 'axios'
import ReactTable from "react-table"; 
import 'react-table/react-table.css'
import { makeStyles } from '@material-ui/core/styles';
import "../Component/Styles.css"

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
    const res = await axios.get('https://codeforces.com/api/problemset.problems')
    console.log(res.data)
    this.setState({loading:false, users: res.data.result.problems})
  }
  componentDidMount(){
    this.getUsersData()
  }
  render() {
    const columns = [{  
      Header: 'contestId',  
      accessor: 'contestId',
      sort: 'asc',
      width: 80
     }
     ,{  
      Header: 'index',  
      accessor: 'index' ,
      sort: 'asc',
      width: 70
      }
     
     ,{  
     Header: 'name',  
     accessor: 'name' ,
     width: 200
     }
     ,{  
     Header: 'points',  
     accessor: 'points',
     width: 70
     },
     {  
      Header: 'rating',  
      accessor: 'rating',
      sort: 'asc',
      width: 70
      },{
         
            Header: 'tags',  
            accessor: 'tags',
            sort: 'asc',
            width: 70
            
      }
  ]
    return (
      <div className='box'>
          <ReactTable responsive className='table' 
      data={this.state.users }  
      
      columns={columns}  
      defaultPageSize={10}
      pageSizeOptions={[5,10]}
   />
      </div>
    )
  }
}
