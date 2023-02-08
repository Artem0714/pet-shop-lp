import React from "react";
import './OurService.css';
import { ChangeButton } from "./buttons/ChangeButton";
import device1 from "../UI/img/device1.svg";


export const OurService = (props) => {
    return(
        <div className="our-service">
            <div className="os-titel">
                <h1>Our service</h1>
            </div>
            <div className="os-specialist">
                <div className="os-spec-circle-divece">
                    <img src={device1} alt="device"/>
                </div>
                <div className="os-specialist-description">
                    <h2>Pharmacy</h2>
                    <p>Apoquel is an oral tablet that works differently than other allergy medications. It goes straight to the source to help relieve itch and inflammation at its core—addressing the underlying cause of irritation</p>
                </div>
                <div className="os-specialist-btn">
                    <button>Explore</button>
                </div>
            </div>
            <div className="os-slider-btn">
                <ChangeButton deg={-180}/>
                <ChangeButton border={3} gorizontal={-30} vertical={0} deg={0}/>
            </div>
        </div>
    )
}

