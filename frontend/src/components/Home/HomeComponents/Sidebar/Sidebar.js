import React from "react";
import IsOn from "./IsOn/IsOn";

function Sidebar(props) {
    return (
        <div className="row col-3 sidebar">
            <p className="sidebarTitle">Happening now</p>
            <IsOn setEvent={props.setEvent}/>
        </div>
    )
}

export default Sidebar;