import React from 'react';
import {Switch, Redirect} from 'react-router-dom';
import Home from './Home'
import Login from './Login';
import Dashboard from './Dashboard';
import Stats from './Stats';
import Log from './Log';
import Logout from './Logout';
import Signup from './Signup';
import AddDevice from "./addDevice";
import AppliedRoute from '../components/AppliedRoute';


export default ({ childProps }) =>
    <Switch>
        <AppliedRoute path ="/" exact component={Home} props={childProps} />
        <AppliedRoute path="/login" component={Login} props={childProps} />
        <AppliedRoute path="/signup" component={Signup} props={childProps} />
        <AppliedRoute path="/logout" component={Logout} props={childProps} />
        { childProps.isAuthenticated &&
            <AppliedRoute path="/dashboard" component={Dashboard} props={childProps} />
        }
        { childProps.isAuthenticated &&
            <AppliedRoute path="/stats" component={Stats} props={childProps} />
        }
        { childProps.isAuthenticated &&
            <AppliedRoute path="/log" component={Log} props={childProps} />
        }
        { childProps.isAuthenticated &&
            <AppliedRoute path ="/addDevice" component={AddDevice} props ={childProps}/>
        }
        { !childProps.isAuthenticated &&
          <Redirect to ='/login'/>
        }
    </Switch>;
