import React, {Component} from 'react';
import './App.css';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import Home from "./components/Home/Home";
import LoginForm from "./components/LoginForm/LoginForm";

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import CreateEvent from "./components/CreateEvent/CreateEvent";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isShow: true,
            setEvent: 'culture',
        };
    }

    render() {
        return (

            <Router>
                <div className="App">
                    <div className="d-flex">
                        <Switch>
                            <Route path="/register" exact={true}>
                                <RegistrationForm/>
                            </Route>
                            <Route path="/login" exact={true}>
                                <LoginForm/>
                            </Route>
                            <Route path="/home" exact={true}>
                                <Home isShow={true} setEvent={'all'}/>
                            </Route>
                            <Route path="/events" exact={true}>
                                <Home isShow={false} setEvent={'all'}/>
                            </Route>
                            <Route path="/culture" exact={true}>
                                <Home isShow={false} setEvent={'culture'}/>
                            </Route>
                            <Route path="/beauty" exact={true}>
                                <Home isShow={false} setEvent={'beauty'}/>
                            </Route>
                            <Route path="/technology" exact={true}>
                                <Home isShow={false} setEvent={'technology'}/>
                            </Route>
                            <Route path="/crafts" exact={true}>
                                <Home isShow={false} setEvent={'crafts'}/>
                            </Route>
                            <Route path="/music" exact={true}>
                                <Home isShow={false} setEvent={'music'}/>
                            </Route>
                            <Route path="/quiz-night" exact={true}>
                                <Home isShow={false} setEvent={'quiz'}/>
                            </Route>
                            <Route path="/create-event" exact={true}>
                                <CreateEvent/>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }

}


export default App;
