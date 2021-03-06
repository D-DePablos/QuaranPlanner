import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import header from "../Icons/logotype.png";

class Header extends Component {
    redirectToRegister = () => {
        this.props.history.push('/register');
         window.location.reload(true);
    }
    redirectToLogin = () => {
        //props.updateNavbarHidden(false);
        this.props.history.push('/login');
        window.location.reload(true);
    }
    redirectToHomePage = () => {
        this.props.history.push('/home');
        window.location.reload(true);
    }
    redirectToCreateEvent = () => {
        this.props.history.push('/create-event');
        window.location.reload(true);
    }
    capitalize = (s) => {
        if (typeof s !== 'string') return ''
        if (s === '') return "Home"
        return s.charAt(0).toUpperCase() + s.slice(1)
    }
    title = this.capitalize(this.props.location.pathname.substring(1, this.props.location.pathname.length));

    render() {
        return (
            <nav className="navbar navbar-dark bg-primary">
                <div className="row col-12">
                    <span className="h3" onClick={() => this.redirectToHomePage()}><img src={header}
                                                                                        className="headerImage"/><span
                        className="currentPage"> | {this.props.title || this.title}</span></span>

                        {this.props.isShow ? <div className="button-profile-group"><button className="profileButton loginButton"
                                                     onClick={() => this.redirectToLogin()}>Login</button>
                            <button className="profileButton registerButton"
                                    onClick={() => this.redirectToRegister()}>Register
                            </button></div> : <div className="button-profile-group"><button className="profileButton createEvent" onClick={() => this.redirectToCreateEvent()}
                                                     >Create event</button></div>}

                </div>
            </nav>
        )
    }


}

export default withRouter(Header);