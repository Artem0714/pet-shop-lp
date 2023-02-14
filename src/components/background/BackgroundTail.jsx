import React from "react";
import yellowCups from "../../UI/img/yellow_cups_group.svg";
import brush_stroke_mini from "../../UI/img/brush_stroke_mini.svg";

export const BackgroundTail = () => {
    return(
        <>
            <div className="bg-tail">
                <div className="bg-tail-first-level">
                    <div className="bg-t-fl-yellow"></div>
                    <div className="bg-t-fl-orange">
                        <img src={brush_stroke_mini} alt="brush_stroke_mini" />
                    </div>
                </div>
                <div className="bg-tail-second-level">
                    <img src={yellowCups} alt="yellow cups" />
                </div>
            </div>
        </>
    )
}