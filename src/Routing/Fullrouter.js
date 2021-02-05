import React, { Component, Fragment } from 'react';
import Home from '../Webpages/Home';
import Leaderboard from '../Webpages/Leaderboard';
import {Route} from "react-router-dom";
import Profile from '../Webpages/Profile';
import SignIn from '../Webpages/Signin';
import SignUp from '../Webpages/Signup';
import Compiler from '../Webpages/Compiler';
import ProblemList from '../Webpages/ProblemList';
import ResponsiveDrawer from '../Webpages/Drawer';



class Fullrouter extends Component {
    render() {
        return (
            <Fragment>
                 <Route exact path="/" component={Home}></Route>
                <Route exact path="/Leaderboard" component={Leaderboard}></Route>
                <Route exact path="/profile" component={Profile}></Route>
                <Route exact path="/signin" component={SignIn}></Route>
                <Route exact path="/signup" component={SignUp}></Route>
                <Route exact path="/compiler" component={Compiler}></Route>
                <Route exact path="/problemlist" component={ProblemList}></Route>
                <Route exact path="/drawer" component={ResponsiveDrawer}></Route>
           
            </Fragment>
        );
    }
}

export default Fullrouter;