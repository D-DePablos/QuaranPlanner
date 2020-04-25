import React from "react";
import tech from "../Icons/tech.jpg";
import book from "../Icons/books.jpg"
import music from "../Icons/music.jpg";
import beauty from "../Icons/beauty.jpg";
import craft from "../Icons/crafts.jpg";
import quizNight from "../Icons/quiz night.jpg";

function Footer() {
    return (
        <div className="row col-12 footerMenu">
            <button className="categoryButton bookButton">
                <div className="imageContainer">
                    <img src={book} className="iconPicture"/>
                </div>
                Books
            </button>
            <button className="categoryButton beautyButton">
                <div className="imageContainer">
                    <img src={beauty} className="iconPicture"/>
                </div>
                Beauty
            </button>
            <button className="categoryButton techButton">
                <div className="imageContainer">
                    <img src={tech} className="iconPicture"/>
                </div>
                Technology
            </button>
            <button className="categoryButton craftButton">
                <div className="imageContainer">
                    <img src={craft} className="iconPicture"/>
                </div>
                Crafts
            </button>
            <button className="categoryButton musicButton">
                <div className="imageContainer">
                    <img src={music} className="iconPicture"/>
                </div>
                Music
            </button>
            <button className="categoryButton quizNightButton">
                <div className="imageContainer">
                    <img src={quizNight} className="iconPicture"/>
                </div>
                Quiz Night
            </button>
        </div>
    );
}

export default Footer;