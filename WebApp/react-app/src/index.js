import React from 'react';
import ReactDOM from 'react-dom';
import Amplify from 'aws-amplify';
import {BrowserRouter as Router , HashRouter} from "react-router-dom"
import * as serviceWorker from './serviceWorker';
import config from './config'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './index.css';
import App from './modules/App';

Amplify.configure({
    Auth: {
      mandatorySignIn: true,
      region: config.cognito.REGION,
      userPoolId: config.cognito.USER_POOL_ID,
      identityPoolId: config.cognito.IDENTITY_POOL_ID,
      userPoolWebClientId: config.cognito.APP_CLIENT_ID
    },
    Storage: {
      region: config.s3.REGION,
      bucket: config.s3.BUCKET,
      identityPoolId: config.cognito.IDENTITY_POOL_ID
    }
  });



ReactDOM.render(<HashRouter>
                    <App />
                </HashRouter>,
                document.getElementById('root'));
serviceWorker.unregister();
