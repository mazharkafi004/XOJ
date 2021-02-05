
import './App.css';
import { Fragment } from 'react';
import Navigation from './Routing/Navigation';
import Fullrouter from './Routing/Fullrouter';
import {BrowserRouter} from "react-router-dom";
function App() {
  return (
 <Fragment>
 <BrowserRouter>
 <Navigation>
   </Navigation>
   <Fullrouter>
     
   </Fullrouter>
 </BrowserRouter>
 </Fragment>
  );
}

export default App;
