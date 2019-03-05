import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import * as serviceWorker from './serviceWorker';

import App from './modules/App';
import Login from './modules/Login'
import Home from './modules/Home'
import Dashboard from './modules/Dashboard'

const routes = (
    <Router> 
        <div>
            <Route path ="/" component={App} />
            <Route path="/login" component={Login} />
            <Route path="/home" component={Home} />
            <Route path="/dashboard" component={Dashboard} />
        </div>
    </Router>
)

ReactDOM.render(routes, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
