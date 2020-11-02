import React from 'react';
import {Link, Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Login from './auth/Login';

export default function Routing(){
    return (
        <Router>
        <div>
            <Navbar/>

            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login}/>

            </Switch>
            </div>
        </Router>

    )
}