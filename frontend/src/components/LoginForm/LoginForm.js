import React, {useState} from 'react';
import axios from 'axios';
import {API_BASE_URL} from '../../constants/apiConstants';
import {withRouter} from "react-router-dom";
axios.defaults.withCredentials = true
// axios.defaults.xsrfHeaderName = "X-CSRFToken";
// axios.defaults.withCredentials = true;

function LoginForm(props) {
    let _csrfToken = null;

    async function getCsrfToken() {
        if (_csrfToken === null) {
            const response = await fetch(API_BASE_URL + 'csrf/', {
                credentials: 'include',
            });
            const data = await response.json();
            _csrfToken = data.csrfToken;
            console.log(_csrfToken);
        }
        return _csrfToken;
    }

    const [state, setState] = useState({
        username: "",
        password: "",
        successMessage: null
    })
    const handleChange = (e) => {
        const {id, value} = e.target
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    const handleSubmitClick = async (e) => {
        e.preventDefault();
        const payload = {
            "username": state.username,
            "password": state.password,
        }
        axios.post(API_BASE_URL + 'api-auth/login/', payload, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFTOKEN': await getCsrfToken(),
            },
            credentials: 'include',
        })
            .then(function (response) {
                console.log(response.data);
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
    const redirectToHome = () => {
        props.history.push('/events');
    }
    const redirectToRegister = () => {
        props.history.push('/register');
    }
    return (
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center userForm">
            <span className="h3">Quarenplanner</span>
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
                    <input type="password"
                           className="form-control"
                           id="password"
                           placeholder="Password"
                           value={state.password}
                           onChange={handleChange}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary btnUserForm"
                    onClick={handleSubmitClick}
                >
                    Submit
                </button>
            </form>
            <div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none'}}
                 role="alert">
                {state.successMessage}
            </div>
            <div className="textUserForm registerMessage">
                <p>Don't have an account? </p>
                <p className="registerText" onClick={() => redirectToRegister()}>Register</p>
            </div>

        </div>
    )
}

export default withRouter(LoginForm);