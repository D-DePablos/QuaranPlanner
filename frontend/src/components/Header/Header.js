import React from "react";
import {withRouter} from "react-router-dom";
import header from "../Icons/logotype.png";
function Header(props) {
    const redirectToRegister = () => {
        props.history.push('/register');
    }
    const redirectToLogin = () => {
        props.updateNavbarHidden(false);
        props.history.push('/login');
    }
    const redirectToHomePage = () => {
        props.history.push('/');
    }
    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        if (s === '') return "Home"
        return s.charAt(0).toUpperCase() + s.slice(1)
    }
    const title = capitalize(props.location.pathname.substring(1, props.location.pathname.length));

    return (
        <nav className="navbar navbar-dark bg-primary">
            <div className="row col-12">
                    <span className="h3" onClick={() => redirectToHomePage()}><img src={header} className="headerImage"/><span
                        className="currentPage"> | {props.title || title}</span></span>
                <div className="button-profile-group">
                    <button className="profileButton loginButton" onClick={() => redirectToLogin()}>Login</button>
                    <button className="profileButton registerButton" onClick={() => redirectToRegister()}>Register
                    </button>
                </div>
            </div>
        </nav>
    )

}

export default withRouter(Header);