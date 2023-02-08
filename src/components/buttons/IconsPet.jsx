import React from "react";
import './IconsPet.css';


export const IconsPet = (props) => {
    return(
        <div className="icon-pet">
            <p className="name-pet">{props.name}</p>
            <img src={props.picture} alt="Pet" />
        </div>
    )
}