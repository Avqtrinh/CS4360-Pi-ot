import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Route} from "react-router-dom"
import * as serviceWorker from './serviceWorker';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import App from './modules/App';
import Login from './modules/Login';
import Dashboard from './modules/Dashboard';
import Stats from './modules/Stats';
import Log from './modules/Log';
import Logout from './modules/Logout';

const routes = (
    <Router> 
        <div>
            <Route path ="/" component={App} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/stats" component={Stats} />
            <Route path="/log" component={Log} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
        </div>
    </Router>
)

ReactDOM.render(routes, document.getElementById('root'));
serviceWorker.unregister();
