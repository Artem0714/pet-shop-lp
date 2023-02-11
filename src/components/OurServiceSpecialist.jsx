import React from "react";
import './OurServiceSpecialist.css';

export const OurServiceSpecialist = (props) => {
    return(
        <div key={props.specialist.id} className="os-specialist" style={props.style}>
            <div className="os-spec-circle-divece">
                <img src={props.specialist.img} alt="device"/>
            </div>
            <div className="os-specialist-description">
                <h3>{props.specialist.title}</h3>
                <p>{props.specialist.content}</p>
            </div>
            <div className="os-specialist-btn">
                <button>Explore</button>
            </div>
        </div>  
    )
}
