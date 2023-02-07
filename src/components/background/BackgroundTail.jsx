import React from "react";
import yellowCups from "../../UI/img/yellow_cups_group.svg";

export const BackgroundTail = () => {
    return(
        <>
            <div className="bg-tail">
                <div className="bg-tail-first-level">
                    <div className="bg-t-fl-yellow"></div>
                    <div className="bg-t-fl-orange"></div>
                </div>
                <div className="bg-tail-second-level">
                    <img src={yellowCups} alt="yellow cups" />
                </div>
            </div>
        </>
    )
}