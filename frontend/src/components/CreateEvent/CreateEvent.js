import React, {useState} from 'react';
import axios from 'axios';
import {API_BASE_URL} from '../../constants/apiConstants';
import {withRouter} from "react-router-dom";
import header from "../Icons/logotype.png";


function CreateEvent(props) {
    const [state, setState] = useState({
        name: "",
        description: "",
        url: "",
        platform: "",
        category: "",
        eventStart: "",
        eventEnd: "",
    })
    const handleChange = (e) => {
        const {id, value} = e.target
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }
    const sendDetailsToServer = () => {

        const payload = {
            "name": state.name,
            "description": state.description,
            "url": state.url,
            "platform": state.platform,
            "category": state.category,
            // "event_start": state.eventStart,
            // "event_end": state.eventEnd,

        }
        axios.post(API_BASE_URL + 'api/events/', payload)
            .then(function (response) {
                console.log(response.data)
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
        window.location.reload(true);
    }

    const handleSubmitClick = (e) => {
        e.preventDefault();
        sendDetailsToServer()
    }
    return (
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center userForm">
            <span className="h3 userPage" onClick={() => redirectToHome()}><img src={header}
                                                                                className="userPage"/></span>
            <form>
                <div className="form-group text-left">
                    <input type="text"
                           className="form-control"
                           id="name"
                           aria-describedby="eventName"
                           placeholder="Enter event name"
                           value={state.name}
                           onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="form-group text-left">
                    <input type="text"
                           className="form-control"
                           id="description"
                           aria-describedby="eventDescription"
                           placeholder="Enter event description"
                           value={state.description}
                           onChange={handleChange}
                    />
                </div>
                <div className="form-group text-left">
                    <input type="text"
                           className="form-control"
                           id="url"
                           aria-describedby="eventURL"
                           placeholder="Enter event URL"
                           value={state.url}
                           onChange={handleChange}
                    />
                </div>
                <div className="form-group text-left">
                    <input type="text"
                           className="form-control"
                           id="platform"
                           aria-describedby="eventPlatform"
                           placeholder="Enter event platform"
                           value={state.platform}
                           onChange={handleChange}
                    />
                </div>
                <div className="form-group text-left">
                    <input type="text"
                           className="form-control"
                           id="category"
                           aria-describedby="eventCategory"
                           placeholder="Enter event category"
                           value={state.category}
                           onChange={handleChange}
                    />
                </div>
                <div className="form-group text-left">
                    <input type="text"
                           className="form-control"
                           id="eventStart"
                           aria-describedby="eventStart"
                           placeholder="Enter event start date"
                           value={state.eventStart}
                           onChange={handleChange}
                    />
                </div>
                <div className="form-group text-left">
                    <input type="text"
                           className="form-control"
                           id="eventEnd"
                           aria-describedby="eventEnd"
                           placeholder="Enter event end date"
                           value={state.eventEnd}
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

        </div>
    )
}

export default withRouter(CreateEvent);