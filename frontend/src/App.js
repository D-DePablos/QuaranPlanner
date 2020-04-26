import React, {useState} from 'react';
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


function App() {
    const [isNavbarHidden, updateNavbarHidden] = useState(null);
    const [title] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);
    const [errorMessage, updateErrorMessage] = useState(null);
    return (
        <Router>
            <div className="App">
                {isNavbarHidden == false ? null : <Header title={title} updateNavbarHidden={updateNavbarHidden} setLoggedIn={setLoggedIn}/> }
                <div className="d-flex">
                    <Switch>
                        <Route path="/" exact={true}>
                            <Home />
                        </Route>
                        <Route path="/register" exact={true}>
                            <RegistrationForm showError={updateErrorMessage} setLoggedIn={setLoggedIn} updateNavbarHidden={updateNavbarHidden}/>
                        </Route>
                        <Route path="/login" exact={true}>
                            <LoginForm showError={updateErrorMessage}/>
                        </Route>
                        <Route path="/home" exact={true}>
                            <Home />
                        </Route>
                        <Route path="/home" exact={true}>
                            <Home />
                        </Route>
                    </Switch>
                    <AlertComponent errorMessage={errorMessage} hideError={updateErrorMessage}/>
                </div>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
