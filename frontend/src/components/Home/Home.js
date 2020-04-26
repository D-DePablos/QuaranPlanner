import React from "react";
import Sidebar from "./HomeComponents/Sidebar/Sidebar";
import Events from "../Events/Events";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Home(props) {
    return (

        <div>
            <Header isShow={props.isShow}/>
            <div className="col-12">
                <Sidebar/>
                <Events setEvent={props.setEvent}/>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;