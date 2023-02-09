import React from "react";
import './OurService.css';
import { ChangeButton } from "./buttons/ChangeButton";
import { OurServiceSpecialist } from "./OurServiceSpecialist";

export const OurService = (props) => {
    return(
        <div className="our-service">
            <div className="os-titel">
                <h1>Our service</h1>
            </div>
            <OurServiceSpecialist />
            <div className="os-slider-btn">
                <ChangeButton deg={-180}/>
                <ChangeButton border={3} gorizontal={-30} vertical={0} deg={0}/>
            </div>
        </div>
    )
}

