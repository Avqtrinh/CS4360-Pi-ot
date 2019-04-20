import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './Home'
import Login from './Login';
import Dashboard from './Dashboard';
import Stats from './Stats';
import Log from './Log';
import Logout from './Logout';
import Display from './Display'

export default () =>
    <Switch>
        <Route path ="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/stats" component={Stats} />
        <Route path="/log" component={Log} />
        <Route path="/logout" component={Logout} />
        <Route path="/display" component={Display} />
    </Switch>;