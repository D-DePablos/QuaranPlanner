import React from "react";
import Sidebar from "./HomeComponents/Sidebar/Sidebar";
import Card from "../Card/Card";
import Events from "../Events/Events";

function Home() {
    return (
        <div className="col-12">
            <Sidebar/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Events/>
        </div>
    )
}

export default Home;