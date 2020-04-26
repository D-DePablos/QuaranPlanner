import React, {Component} from "react";
import tech from "../Icons/tech.jpg";
import culture from "../Icons/books.jpg"
import music from "../Icons/music.jpg";
import beauty from "../Icons/beauty.jpg";
import craft from "../Icons/crafts.jpg";
import quizNight from "../Icons/quiz night.jpg";
import {withRouter} from "react-router-dom";

class Footer extends Component{

    redirectToEvent = (event) =>{
        console.log(event);
        this.props.history.push('/' +event);
         window.location.reload(true);
    }
    render() {
        return (
        <div className="row col-12 footerMenu">
            <button className="categoryButton bookButton">
                <div className="imageContainer">
                    <img src={culture} onClick={() => this.redirectToEvent('culture')} className="iconPicture"/>
                </div>
                Culture
            </button>
            <button className="categoryButton beautyButton">
                <div className="imageContainer">
                    <img src={beauty} onClick={() => this.redirectToEvent('beauty')} className="iconPicture"/>
                </div>
                Beauty
            </button>
            <button className="categoryButton techButton">
                <div className="imageContainer">
                    <img src={tech} onClick={() => this.redirectToEvent('technology')} className="iconPicture"/>
                </div>
                Technology
            </button>
            <button className="categoryButton craftButton">
                <div className="imageContainer">
                    <img src={craft} onClick={() => this.redirectToEvent('crafts')} className="iconPicture"/>
                </div>
                Crafts
            </button>
            <button className="categoryButton musicButton">
                <div className="imageContainer">
                    <img src={music} onClick={() => this.redirectToEvent('music')} className="iconPicture"/>
                </div>
                Music
            </button>
            <button className="categoryButton quizNightButton">
                <div className="imageContainer">
                    <img src={quizNight} onClick={() => this.redirectToEvent('quiz-night')} className="iconPicture"/>
                </div>
                Quiz Night
            </button>
        </div>
    );
    }
}

export default withRouter(Footer);