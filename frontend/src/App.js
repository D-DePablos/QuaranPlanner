import React, {Component, useState} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import Home from "./components/Home/Home";
import LoginForm from "./components/LoginForm/LoginForm";
import AlertComponent from "./components/AlertComponent/AlertComponent";
import Footer from "./components/Footer/Footer";

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Events from "./components/Events/Events";

class App extends Component {
    //isNavbarHidden, updateNavbarHidden = useState(null);
//title = useState(null);
//[loggedIn, setLoggedIn] = useState(false);
//[errorMessage, updateErrorMessage] = useState(null);

    constructor(props) {
        super(props);
        this.state = {
            isShow: true,
        };
    }

    render() {
        return (

            <Router>
                <div className="App">
                    <div className="d-flex">
                        <Switch>
                            <Route path="/" exact={true}>
                                <Home isShow={true}/>
                            </Route>
                            <Route path="/register" exact={true}>
                                <RegistrationForm/>
                            </Route>
                            <Route path="/login" exact={true}>
                                <LoginForm/>
                            </Route>
                            <Route path="/home" exact={true}>
                                <Home/>
                            </Route>
                            <Route path="/home" exact={true}>
                                <Home isShow={true}/>
                            </Route>
                            <Route path="/events" exact={true}>
                                <Home isShow={false}/>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }

}


export default App;
