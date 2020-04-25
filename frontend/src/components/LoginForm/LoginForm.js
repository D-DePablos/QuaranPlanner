import React, {useState} from 'react';
import axios from 'axios';
import {API_BASE_URL} from '../../constants/apiConstants';
import {withRouter} from "react-router-dom";

function LoginForm(props) {
    const [state, setState] = useState({
        email: "",
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
    const handleSubmitClick = (e) => {
        e.preventDefault();
        const payload = {
            "email": state.email,
            "password": state.password,
        }
        axios.post(API_BASE_URL + 'api-auth/login', payload)
            .then(function (response) {
                if (response.data.code === 302) {
                    setState(prevState => ({
                        ...prevState,
                        'successMessage': 'Registration successful. Redirecting to home page..'
                    }))
                    redirectToHome();
                    props.showError(null)
                } else if (response.data.code === 200) {
                    props.showError("Username and password do not match");
                } else {
                    props.showError("Username does not exists");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const redirectToHome = () => {
        props.updateTitle('Home')
        props.history.push('/home');
    }
    const redirectToRegister = () => {
        props.updateTitle('Register')
        props.history.push('/register');
    }
    return (
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center userForm">
            <span className="h3">Quarenplanner</span>
            <form>
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
                <span>Don't have an account? </span>
                <span className="registerText" onClick={() => redirectToRegister()}>Register</span>
            </div>

        </div>
    )
}

export default withRouter(LoginForm);