import React from "react";
import footprintPredatorLight from "../../UI/img/footprint_predator_light.svg";
import pigTailLight from "../../UI/img/pig_tail_light.svg";


export const BackgroundMakingPet = () => {
    return(
        <>
            <div className="bg-making-pet">
                <div className="bg-mp-pic-pig-tail">
                    <img src={pigTailLight} alt="pig tail" />
                </div>
                <div className="bg-mp-pic-footprint-predator">
                    <img src={footprintPredatorLight} alt="footprint predator" />
                </div>
            </div>
        </>
    )
}