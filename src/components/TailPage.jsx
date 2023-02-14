import React from "react";
import tail_page_mustache from "../UI/img/tail_page_mustache.svg";
import tail_page_dog from "../UI/img/tail_page_dog.svg";
import './TailPage.css';

export const TailPage = (props) => {
    return(
        <div className="tail-page-main">
            <div className="dog">
                <img src={tail_page_mustache} alt="tail_page_mustache" />
                <img src={tail_page_dog} alt="tail_page_dog" />
            </div>
            <div className="email-block">
                <input type="text" className="email-input" placeholder="Mail"/>
                <button className="email-edit-arrow"></button>
            </div>

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