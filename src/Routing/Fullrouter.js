import React, { Component, Fragment } from 'react';
import Home from '../Webpages/Home';
import Leaderboard from '../Webpages/Leaderboard';
import {Route} from "react-router-dom";
import Profile from '../Webpages/Profile';
import SignIn from '../Webpages/Signin';
import SignUp from '../Webpages/Signup';

import ProblemList from '../Webpages/ProblemList';
import StickyHeadTable from '../Component/Table';
import CustomPaginationActionsTable from '../Component/Table';
import NavBar from '../Component/NavBar';
import Settings from '../Webpages/Settings';
import Compiler from '../Compiler/Compiler';
import ProblemListUva from '../Webpages/ProblemListUva';


import URIproblemView from '../Webpages/URIproblemView';
import PdfViewer from '../Webpages/PdfViewer';
import Hulululu from '../Webpages/ProblemListUva';
import ProblemListUri from '../Webpages/ProblemListUri';
import FAQs from '../Webpages/FAQs';






class Fullrouter extends Component {
    render() {
        return (
            <Fragment>
                 <Route exact path="/" component={ProblemList}></Route>
                <Route exact path="/Leaderboard" component={Leaderboard} ></Route>
                <Route exact path="/profile" component={Profile}></Route>
                <Route exact path="/signin" component={SignIn}></Route>
                <Route exact path="/signup" component={SignUp} ></Route>


                <Route exact path="/problemlist" component={ProblemList}></Route>
                <Route exact path="/problemlisturi" component={ProblemListUri}></Route>
                <Route exact path="/navbar" component={NavBar}></Route>
                
                <Route exact path="/faqs" component={FAQs}></Route>
                <Route exact path="/table" component={Hulululu}></Route>
                <Route exact path="/uvalist" component={ProblemListUva}></Route>
            
                <Route exact path="/probshow/:probid" component={URIproblemView}></Route>
                <Route exact path="/compiler" component={Compiler}></Route>



            </Fragment>
        );
    }
}

export default Fullrouter;
