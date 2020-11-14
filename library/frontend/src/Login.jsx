import React, { Component } from 'react';
import BooksList from './components/BooksList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa';
import LoginComponent from './components/LoginComponent';
import LogoutComponent from './LogoutComponent';
import AuthenticatedRoute from './AuthenticatedRoute';
import HomePage from './components/HomePage'


class LoginApp extends Component {


    render() {
        return (
            <>
                <Router>
                    <>
                        <Switch>
                            <Route path="/" exact component={LoginComponent} />
                            <Route path="/login" exact component={LoginComponent} />
                            <AuthenticatedRoute path="/logout" exact component={LogoutComponent} />
                            <AuthenticatedRoute path="/home" exact component={HomePage} />
                        </Switch>
                    </>
                </Router>
            </>
        )
    }
}

export default LoginApp
