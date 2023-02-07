import React from "react";
import brushStroke from "../../UI/img/brush_stroke_for_mainpage.svg";
import backgroundBlueRock1 from "../../UI/img/background_mainpage1.svg";
import backgroundBlueRock2 from "../../UI/img/background_mainpage2.svg";

export const BackgroundMainPage = () => {
    return(
        <>
            <div className="background__mainpage">
                <div className="bg_mp_blue_rock_gr">
                    <img src={backgroundBlueRock1} alt="Background" />
                    <img src={backgroundBlueRock2} alt="Background" />
                </div>
                <div className="bg_mp_blue_block">
                    <img className="bg_mp_brush_stroke" src={brushStroke} alt="Background" />
                </div>
            </div>
        </>
    )
}