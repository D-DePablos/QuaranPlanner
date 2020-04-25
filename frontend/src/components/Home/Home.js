import React from "react";
import Sidebar from "./HomeComponents/Sidebar/Sidebar";
import Card from "../Card/Card";

function Home() {
    return (
        <div className="col-12">
            <Sidebar/>
            <Card/>
        </div>
    )
}

export default Home;