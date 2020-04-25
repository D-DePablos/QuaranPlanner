import React, {useState} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import Home from "./components/Home/Home";
import LoginForm from "./components/LoginForm/LoginForm";

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
    const [isNavbarHidden, updateNavbarHidden] = useState(null);
    const [title] = useState(null);
    const [errorMessage, updateErrorMessage] = useState(null);
    return (
        <Router>
            <div className="App">
                {isNavbarHidden == false ? null : <Header title={title} updateNavbarHidden={updateNavbarHidden}/> }
                <div className="d-flex">
                    <Switch>
                        <Route path="/" exact={true}>
                            <Home />
                        </Route>
                        <Route path="/register" exact={true}>
                            <RegistrationForm showError={updateErrorMessage} updateNavbarHidden={updateNavbarHidden}/>
                        </Route>
                        <Route path="/login" exact={true}>
                            <LoginForm showError={updateErrorMessage}/>
                        </Route>
                        <Route path="/home" exact={true}>
                            <Home />
                        </Route>
                    </Switch>
                </div>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
