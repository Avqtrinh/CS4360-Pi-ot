import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './Home'
import Login from './Login';
import Dashboard from './Dashboard';
import Stats from './Stats';
import Log from './Log';
import Logout from './Logout';
import Display from './Display';
import AppliedRoute from '../components/AppliedRoute';

export default ({ childProps }) =>
    <Switch>
        <AppliedRoute path ="/" exact component={Home} props={childProps} />
        <AppliedRoute path="/login" component={Login} props={childProps} />
        <AppliedRoute path="/dashboard" component={Dashboard} props={childProps} />
        <AppliedRoute path="/stats" component={Stats} props={childProps} />
        <AppliedRoute path="/log" component={Log} props={childProps} />
        <AppliedRoute path="/logout" component={Logout} props={childProps} />
        <AppliedRoute path="/display" component={Display} props={childProps} />
    </Switch>;
