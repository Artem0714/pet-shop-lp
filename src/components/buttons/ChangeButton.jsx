import React from "react";
import './ChangeButton.css';


export const ChangeButton = (props) => {
    return(
        <>
            <button className="change-btn" style={{transform: `translate(${props.gorizontal}px, ${props.vertical}px)`, border: `${props.border}px solid white`}}>
                <div className="arrow-1">
                    <div className="arrow-1-div" style={{transform: `rotate(${props.deg}deg)`}}></div>
                </div>
            </button>
        </>
    )
}