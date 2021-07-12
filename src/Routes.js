import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home/Index';
import Login from './pages/Login/Index';

export default function Routes(){
    return(
        <Router>
        <Switch>
            <Route path = '/' exact component={Home}/>
            <Route path = '/login' exact component={ Login } />
        </Switch>
        </Router>
    )
}