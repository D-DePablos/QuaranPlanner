import React, {Component} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookSquare, faInstagramSquare} from "@fortawesome/free-brands-svg-icons";
import {faYoutubeSquare} from "@fortawesome/free-brands-svg-icons";
import tech from "../../../../../Icons/tech.jpg";
import culture from "../../../../../Icons/books.jpg"
import music from "../../../../../Icons/music.jpg";
import beauty from "../../../../../Icons/beauty.jpg";
import craft from "../../../../../Icons/crafts.jpg";
import quizNight from "../../../../../Icons/quiz night.jpg";
import {faExternalLinkSquareAlt} from "@fortawesome/free-solid-svg-icons";

class MiniCards extends Component {


    render() {
        return (
            <div className="row col-12 card-event isOn">
                {console.log(this.props.title)}
                <div className="eventTitleContainer"><p className="event-title">{this.props.title}</p></div>
                <div className="event-details">
                    <div className="event-icon">
                        <Platform platform={this.props.platform} url={this.props.url}/>
                    </div>
                    <p className="isOn date"><p className="event-start">{this.props.startDate}</p>
                        <p
                            className="event-end">{this.props.endDate}</p>
                    </p>
                </div>
                <div className="event-category">
                    <CategoryParagraph event={this.props.category}/>
                </div>
            </div>
        );
    }
}

function CategoryParagraph(props) {
    if (props.event == "Culture") {
        return (
            <p className="event-category culture">
                <img src={culture} className="isOn event-categoryPicture"/>
            </p>
        )
    } else if (props.event == "Technology") {
        return (
            <p className="event-category technology">
                <img src={tech} className="isOn event-categoryPicture"/>
            </p>
        )
    } else if (props.event == "Beauty") {
        return (
            <p className="event-category beauty">
                <img src={beauty} className="isOn event-categoryPicture"/>
            </p>
        )
    } else if (props.event == "Music") {
        return (
            <p className="event-category music">
                <img src={music} className="isOn event-categoryPicture"/>
            </p>
        )
    } else if (props.event == "Craft") {
        return (
            <p className="event-category craft">
                <img src={craft} className="isOn event-categoryPicture"/>
            </p>
        )
    } else {
        return (
            <p className="event-category quizNight">
                <img src={quizNight} className="isOn event-categoryPicture"/>
            </p>
        )
    }
}

function Platform(props) {
    if (props.platform == "Youtube") {
        return (
            <a href={props.url}> <FontAwesomeIcon icon={faYoutubeSquare}/></a>
        )
    } else if (props.platform == "Instagram") {
        return (
            <a href={props.url}> <FontAwesomeIcon icon={faInstagramSquare} className="isOn instagram"/></a>
        )
    } else if (props.platform == "Facebook") {
        return (
            <a href={props.url}> <FontAwesomeIcon icon={faFacebookSquare}/></a>
        )
    } else {
        return (
            <a href={props.url}> <FontAwesomeIcon icon={faExternalLinkSquareAlt}/></a>
        )
    }
}

export default MiniCards;