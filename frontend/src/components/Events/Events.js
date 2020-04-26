import React, {Component, useState} from 'react';
import axios from 'axios';
import {API_BASE_URL} from '../../constants/apiConstants';
import Card from "../Card/Card";

class Events extends Component {

    constructor() {
        super();
        this.state = {events: ["test", "test2"]};
    }

    componentDidMount() {
        axios.get(API_BASE_URL + 'api/events/')
            .then((result) => {
            this.setState({events: result.data});
        });
    }

    render() {
        return (
            <div>
                {this.state.events.map(event => (
                    <Card title={event.name} likes={event.likes} dislikes={event.dislikes} description={event.description} platform={event.platform} startDate={event.event_start} endDate={event.event_end} category={event.category}/>
                ))}
            </div>
        )
    }


}

export default Events;