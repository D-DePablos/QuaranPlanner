import React from "react";
import Sidebar from "./HomeComponents/Sidebar/Sidebar";
import Card from "../Card/Card";
import Events from "../Events/Events";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Home(props) {
    return (

        <div>
            <Header isShow={props.isShow}/>
            <div className="col-12">
                <Sidebar/>
                <Events/>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;