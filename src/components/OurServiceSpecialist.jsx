import React from "react";
import './OurServiceSpecialist.css';

export const OurServiceSpecialist = (props) => {
    return(
        <div className="os-specialist" style={props.style}>
            <div className="os-spec-circle-divece" style={props.styleimg}>
                <img src={props.obj.img} alt="device"/>
            </div>
            <div className="os-specialist-description">
                <h3>{props.obj.title}</h3>
                <p>{props.obj.content}</p>
            </div>
            <div className="os-specialist-btn">
                <button className={props.stylebtn}>Explore</button>
            </div>
        </div>  
    )
}
