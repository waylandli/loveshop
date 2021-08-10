import React from 'react';
import Home from './Home';
import About from './About';
import Shop from './Shop';
import Appointments from './Appointments';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const Routes = () => {
    return ( 
        <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/appointments">
            <Appointments />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
    </Router>
     );
}
 
export default Routes;