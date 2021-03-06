import React, {Component} from 'react';
import axios from 'axios';
import {API_BASE_URL} from '../../../../../constants/apiConstants';
import MiniCards from "./MiniCards/MiniCards";


class IsOn extends Component {

    constructor() {
        super();
        this.state = {events: []};
    }

    componentDidMount() {
        if (this.props.setEvent == "all") {
            axios.get(API_BASE_URL + 'api/events/?is_on=true')
                .then((result) => {
                    this.setState({events: result.data});
                });
        } else {
            axios.get(API_BASE_URL + 'api/events/?is_on=true&search=' + this.props.setEvent)
                .then((result) => {
                    this.setState({events: result.data});
                });
        }
    }

    render() {
        return (
            <div>
                <AreEvents events={this.state.events} category={this.props.setEvent}/>

            </div>
        )
    }


}

function AreEvents(props) {
    if (props.events.length > 0) {
        return (
            <div className="miniCards">{props.events.map(event => (
                    <MiniCards title={event.name} platform={event.platform} startDate={event.event_start}
                          endDate={event.event_end} category={event.category} url={event.url}/>
            ))}</div>
        )
    }
    else {
        return (
            <div className="card-event isOn noEvents">No ongoing events in {props.category}</div>
        )
    }
}

export default IsOn;