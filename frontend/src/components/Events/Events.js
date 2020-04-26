import React, {Component} from 'react';
import axios from 'axios';
import {API_BASE_URL} from '../../constants/apiConstants';
import Card from "../Card/Card";

class Events extends Component {

    constructor() {
        super();
        this.state = {events: []};
    }

    componentDidMount() {
        if (this.props.setEvent == "all") {
            axios.get(API_BASE_URL + 'api/events/')
                .then((result) => {
                    this.setState({events: result.data});
                });
        } else {
            axios.get(API_BASE_URL + 'api/events/?search=' + this.props.setEvent)
                .then((result) => {
                    this.setState({events: result.data});
                });
        }
    }

    render() {
        {
            console.log(this.props.setEvent)
        }
        return (
            <div>
                {this.state.events.map(event => (
                    <Card id={event.id} title={event.name} likes={event.likes} dislikes={event.dislikes}
                          description={event.description} platform={event.platform} startDate={event.event_start}
                          endDate={event.event_end} category={event.category} url={event.url}/>
                ))}
            </div>
        )
    }


}

export default Events;