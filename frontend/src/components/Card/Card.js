import React from "react";

function Card() {
    return (
        <div className="row col-9 card-event">
            <p className="event-title">Test</p>
            <p className="event-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
                sodales nunc ut ex fringilla varius. Suspendisse cursus in justo a convallis. Pellentesque luctus
                elementum est, quis faucibus orci malesuada in. Integer eu nisl laoreet, placerat lacus ut, aliquet
                odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec
                dui orci, tristique at cursus nec, efficitur eget tellus. Duis venenatis vehicula nulla, sed tincidunt
                augue malesuada non. Fusce malesuada lobortis felis, eget facilisis leo tempus vel. Morbi vel purus at
                est facilisis maximus eu nec dolor.</p>
            <div className="event-details">
                <p className="event-icon">Instagram</p>
                <p><span className="event-start">01/05/2020</span> - <span className="event-end">02/05/2020</span></p>
            </div>
            <div className="event-category">
                <p className="event-category">Technology</p>
            </div>
        </div>
    );
}

export default Card;