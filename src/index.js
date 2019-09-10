import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Login from './components/Login';
import UserPage from './components/UserPage';
import AdminPage from './components/AdminPage';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Redirect from="/"  to="/Login" />
            <Route path="/Login" component={Login} />
            <Route path="/UserPage" component={UserPage}/>
            <Route path="/AdminPage" component={AdminPage}/>
        </div>
    </BrowserRouter>
    ,document.getElementById('root'));
serviceWorker.unregister();
