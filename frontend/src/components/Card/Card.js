import React, {Component} from "react";
import like from "../Icons/like.jpg";
import dislike from "../Icons/dislike.jpg";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookSquare, faInstagramSquare} from "@fortawesome/free-brands-svg-icons";
import {faYoutubeSquare} from "@fortawesome/free-brands-svg-icons";
import tech from "../Icons/tech.jpg";
import culture from "../Icons/books.jpg"
import music from "../Icons/music.jpg";
import beauty from "../Icons/beauty.jpg";
import craft from "../Icons/crafts.jpg";
import quizNight from "../Icons/quiz night.jpg";
import axios from "axios";
import {API_BASE_URL} from "../../constants/apiConstants";
import {faExternalLinkSquareAlt} from "@fortawesome/free-solid-svg-icons";

class Card extends Component {
    _csrfToken = null;

    async getCsrfToken() {
        if (this._csrfToken === null) {
            const response = await fetch(API_BASE_URL + 'csrf/', {
                credentials: 'include',
            });
            const data = await response.json();
            this._csrfToken = data.csrfToken;
        }
        return this._csrfToken;
    }

    dislikeEvent = async (id) => {
        const payload = {
            "id": id,
        }
        axios.post(API_BASE_URL + 'dislikes/', payload, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFTOKEN': await this.getCsrfToken(),
            },
            credentials: 'include',
        })
            .then(function (response) {
                console.log(id + " -1");
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    likeEvent = async (id) => {
        const payload = {
            "id": id,
        }
        axios.post(API_BASE_URL + 'likes/', payload, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFTOKEN': await this.getCsrfToken(),
            },
            credentials: 'include',
        })
            .then(function (response) {
                console.log(id + " +1");
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="row col-9 card-event">
                <div className="eventTitleContainer"><p className="event-title">{this.props.title}</p></div>
                <div className="eventPositionContainer">
                    <div className="likeContainer">
                        <img src={like} onClick={() => this.likeEvent(this.props.id)} className="eventStatus like"
                             title="Attend!"/>
                        <span>{this.props.likes}</span>
                    </div>
                    <div className="dislikeContainer">
                        <img
                            src={dislike} onClick={() => this.dislikeEvent(this.props.id)}
                            className="eventStatus dislike" title="Can live without it"/>
                        <span>{this.props.dislikes}</span>
                    </div>
                </div>
                <div className="descriptionContainer">
                    <p className="event-description">{this.props.description}</p>
                </div>
                <div className="event-details">
                    <div className="event-icon">
                        <Platform platform={this.props.platform} url={this.props.url}/>

                    </div>
                    <p><span className="event-start">{this.props.startDate}</span> - <span
                        className="event-end">{this.props.endDate}</span>
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
                {props.event}
                <img src={culture} className="event-categoryPicture"/>
            </p>
        )
    } else if (props.event == "Technology") {
        return (
            <p className="event-category technology">
                {props.event}
                <img src={tech} className="event-categoryPicture"/>
            </p>
        )
    } else if (props.event == "Beauty") {
        return (
            <p className="event-category beauty">
                {props.event}
                <img src={beauty} className="event-categoryPicture"/>
            </p>
        )
    } else if (props.event == "Music") {
        return (
            <p className="event-category music">
                {props.event}
                <img src={music} className="event-categoryPicture"/>
            </p>
        )
    } else if (props.event == "Craft") {
        return (
            <p className="event-category craft">
                {props.event}
                <img src={craft} className="event-categoryPicture"/>
            </p>
        )
    } else {
        return (
            <p className="event-category quizNight">
                {console.log(props.event)}
                {props.event}
                <img src={quizNight} className="event-categoryPicture"/>
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
            <a href={props.url}> <FontAwesomeIcon icon={faInstagramSquare}/></a>
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

export default Card;