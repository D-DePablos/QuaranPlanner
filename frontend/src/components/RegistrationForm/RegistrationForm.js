import React, {useState} from 'react';
import axios from 'axios';
import {API_BASE_URL} from '../../constants/apiConstants';
import {withRouter} from "react-router-dom";
import header from "../Icons/logotype.png";


function RegistrationForm(props) {
    const [state, setState] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        successMessage: null
    })
    const handleChange = (e) => {
        const {id, value} = e.target
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }
    const sendDetailsToServer = () => {
        if (state.email.length && state.password.length) {
            const payload = {
                "username": state.username,
                "email": state.email,
                "password": state.password,
            }
            axios.post(API_BASE_URL + 'api/users/', payload)
                .then(function (response) {
                    setState(prevState => ({
                        ...prevState,
                        'successMessage': 'Registration successful. Redirecting to home page..'
                    }))
                    redirectToHome();
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

    }
    const redirectToHome = () => {
        props.history.push('/events');
        window.location.reload(true);
    }
    const redirectToHomeNoLogin = () => {
        props.history.push('/home');
        window.location.reload(true);
    }
    const redirectToLogin = () => {
        props.history.push('/login');
        window.location.reload(true);
    }
    const handleSubmitClick = (e) => {
        e.preventDefault();
        if (state.password === state.confirmPassword) {
            sendDetailsToServer()
        }
    }
    return (
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center userForm">
            <span className="h3 userPage" onClick={() => redirectToHomeNoLogin()}><img src={header}
                                                                                        className="userPage"/></span>
            <form>
                <div className="form-group text-left">
                    <input type="text"
                           className="form-control"
                           id="username"
                           aria-describedby="usernameHelp"
                           placeholder="Enter username"
                           value={state.username}
                           onChange={handleChange}
                    />
                </div>
                <div className="form-group text-left">
                    <input type="email"
                           className="form-control"
                           id="email"
                           aria-describedby="emailHelp"
                           placeholder="Enter email"
                           value={state.email}
                           onChange={handleChange}
                    />
                </div>
                <div className="form-group text-left">
                    <input type="password"
                           className="form-control"
                           id="password"
                           placeholder="Password"
                           value={state.password}
                           onChange={handleChange}
                    />
                </div>
                <div className="form-group text-left">
                    <input type="password"
                           className="form-control"
                           id="confirmPassword"
                           placeholder="Confirm Password"
                           value={state.confirmPassword}
                           onChange={handleChange}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary btnUserForm"
                    onClick={handleSubmitClick}
                >
                    Register
                </button>
            </form>
            <div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none'}}
                 role="alert">
                {state.successMessage}
            </div>
            <div className="textUserForm mt-2">
                <p>Already have an account? </p>
                <p className="registerText" onClick={() => redirectToLogin()}>Login here</p>
            </div>

        </div>
    )
}

export default withRouter(RegistrationForm);