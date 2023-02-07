import React from "react";
import pigTail from "../../UI/img/pig_tail.svg";
import footprintPredator from "../../UI/img/footprint_predator.svg";
import collar from "../../UI/img/collar.svg";

export const BackgroundOurService = () => {
    return(
        <>
            <div className="bg-our-service">
                <div className="bg-our-service-orange">
                    <img src={collar} alt="collar" />
                </div>
                <div className="bg-our-service-pictures">
                    <div className="bg-os-pic-pig-tail">
                        <img src={pigTail} alt="pig tail" />
                    </div>
                    <div className="bg-os-pic-footprint-predator">
                        <img src={footprintPredator} alt="footprint predator" />
                    </div>
                </div>
            </div>
        </>
    )
}