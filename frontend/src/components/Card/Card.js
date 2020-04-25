import React from "react";
import like from "../Icons/like.jpg";
import dislike from "../Icons/dislike.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagramSquare} from "@fortawesome/free-brands-svg-icons";
import tech from "../Icons/tech.jpg";

function Card() {
    return (
        <div className="row col-9 card-event">
            <div className="eventTitleContainer"><p className="event-title">Test</p></div>
            <div className="eventPositionContainer">
                <div className="likeContainer">
                    <img src={like} className="eventStatus like" title="Attend!"/>
                    <span> 5 </span>
                </div>
                <div className="dislikeContainer">
                    <img
                        src={dislike}
                        className="eventStatus dislike" title="Can live without it"/>
                    <span> 10 </span>
                </div>
            </div>
            <p className="event-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
                sodales nunc ut ex fringilla varius. Suspendisse cursus in justo a convallis. Pellentesque luctus
                elementum est, quis faucibus orci malesuada in. Integer eu nisl laoreet, placerat lacus ut, aliquet
                odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec
                dui orci, tristique at cursus nec, efficitur eget tellus. Duis venenatis vehicula nulla, sed tincidunt
                augue malesuada non. Fusce malesuada lobortis felis, eget facilisis leo tempus vel. Morbi vel purus at
                est facilisis maximus eu nec dolor.</p>
            <div className="event-details">
                <div className="event-icon"><FontAwesomeIcon icon={faInstagramSquare} /></div>
                <p><span className="event-start">01/05/2020</span> - <span className="event-end">02/05/2020</span></p>
            </div>
            <div className="event-category">
                <p className="event-category">Technology
                <img src={tech} className="event-categoryPicture"/>
                </p>
            </div>
        </div>
    );
}

export default Card;