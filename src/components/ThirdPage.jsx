import React from "react";
import thirdpage_dogandwomen from "../UI/img/thirdpage_dogandwomen.svg";
import './ThirdPage.css';

export const ThirdPage = (props) => {
    return(
        <div className="third-page-main">
            <div className="third-page-img">
                <img src={thirdpage_dogandwomen} alt="thirdpage_dogandwomen" />
            </div>
            <div className="third-page-discription">
                <h1>Making pet parenting easy for everyone</h1>
                <p>Could this be the dog with the longest tail? The Rampur Greyhound - shy, sensitive, alert, and faithful. This is a breed that has climbed its way to being top dog because of its intelligence</p>
                <div className="block-dots">
                    <div className="dot-text">
                        <div className="dot-circle"></div>
                        <p>Adoption</p>
                    </div>
                    <div className="dot-text">
                        <div className="dot-circle"></div>
                        <p>Frozen Raw</p>
                    </div>
                    <div className="dot-text">
                        <div className="dot-circle"></div>
                        <p>Next Day Delivery</p>
                    </div>
                </div>
                <button className="class-name-for-button">Explore</button>
            </div>
        </div>
    )
}