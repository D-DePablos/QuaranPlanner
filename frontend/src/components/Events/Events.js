import React, {useState} from 'react';
import axios from 'axios';
import {API_BASE_URL} from '../../constants/apiConstants';

function Events(props) {

    function componentDidMount() {
        const url = '/api/contacts.php'
        axios.get(url).then(response => response.data)
            .then((data) => {
                this.setState({contacts: data})
                console.log(this.state.contacts)
            })
    }

    const handleSubmitClick = async (e) => {
        e.preventDefault();
        const payload = {
            "id": 0,
        }
        axios.get(API_BASE_URL + 'likes/', payload, {
            headers: {
                'id': 0,
            },
        })
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

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
                    />
                </div>
                <div className="form-group text-left">
                    <input type="password"
                           className="form-control"
                           id="password"
                           placeholder="Password"
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
            <div className="textUserForm registerMessage">
                <p>Don't have an account? </p>

            </div>

        </div>
    )
}

export default Events;