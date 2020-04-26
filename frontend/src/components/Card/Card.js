import React, {Component} from "react";
import like from "../Icons/like.jpg";
import dislike from "../Icons/dislike.jpg";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInstagramSquare} from "@fortawesome/free-brands-svg-icons";
import tech from "../Icons/tech.jpg";

class Card extends Component {
    render() {
        return (
            <div className="row col-9 card-event">
                <div className="eventTitleContainer"><p className="event-title">{this.props.title}</p></div>
                <div className="eventPositionContainer">
                    <div className="likeContainer">
                        <img src={like} className="eventStatus like" title="Attend!"/>
                        <span>{this.props.likes}</span>
                    </div>
                    <div className="dislikeContainer">
                        <img
                            src={dislike}
                            className="eventStatus dislike" title="Can live without it"/>
                        <span>{this.props.dislikes}</span>
                    </div>
                </div>
                <div className="descriptionContainer">
                    <p className="event-description">{this.props.description}</p>
                </div>
                <div className="event-details">
                    <div className="event-icon"><FontAwesomeIcon icon={faInstagramSquare}/></div>
                    <p><span className="event-start">{this.props.startDate}</span> - <span className="event-end">{this.props.endDate}</span>
                    </p>
                </div>
                <div className="event-category">
                    <p className="event-category">{this.props.category}
                        <img src={tech} className="event-categoryPicture"/>
                    </p>
                </div>
            </div>
        );
    }
}

export default Card;