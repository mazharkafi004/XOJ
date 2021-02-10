import axios from 'axios';
import React, { Component, Fragment } from 'react';


import "../index.css"
class Profile extends Component {
    componentDidMount() {
        document.title = 'Profile';
      }
    constructor() {
        super() 

        this.state={
            mydata:[]
        }
    }
    componentDidMount() {
        axios.get("http://localhost:8000/api/user/")
        .then(response=>{
this.setState({mydata:response.data})
        })
        .catch(error=>{

        })
    }
    render() {
        const myList=this.state.mydata
      const user=  myList.map((myList)=>{
            return(
                <h1>Email: {myList.email}<br></br>Name: {myList.name}<br></br>Codeforces ID: {myList.cf_handle}<br></br>URI ID :{myList.uri_handle}<br></br>UVa ID: {myList.uva_handle}<br></br></h1>
                
            )
           
        })
        return (
         <div className="kola">
             <h1 className="kola">Profile
            </h1>
            <h1>{user}</h1>
         </div>
        );
    }
}

export default Profile;