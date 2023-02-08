import React from "react";
import pet2 from "../UI/img/pet2.svg";
import pet3 from "../UI/img/pet3.svg";
import pet1 from "../UI/img/pet1.svg";
import pet4 from "../UI/img/pet4.svg";
import pet5 from "../UI/img/pet5.svg";
import pet6 from "../UI/img/pet6.svg";
import pet7 from "../UI/img/pet7.svg";
import pet8 from "../UI/img/pet8.svg";
import pet9 from "../UI/img/pet9.svg";
import pet10 from "../UI/img/pet10.svg";
import pet11 from "../UI/img/pet11.svg";
import pet12 from "../UI/img/pet12.svg";
import './IconsPetBlock.css';
import { IconsPet } from "./buttons/IconsPet";

export const IconsPetBlock = () => {
    return(
        <div className="icons">
            <IconsPet name='Dog (jasper)' picture={pet1}/>
            <IconsPet name='Dog (jasper)' picture={pet2}/>
            <IconsPet name='Dog (jasper)' picture={pet3}/>
            <IconsPet name='Dog (jasper)' picture={pet4}/>
            <IconsPet name='Dog (jasper)' picture={pet5}/>
            <IconsPet name='Dog (jasper)' picture={pet6}/>
            <IconsPet name='Dog (jasper)' picture={pet7}/>
            <IconsPet name='Dog (jasper)' picture={pet8}/>
            <IconsPet name='Dog (jasper)' picture={pet9}/>
            <IconsPet name='Dog (jasper)' picture={pet10}/>
            <IconsPet name='Dog (jasper)' picture={pet11}/>
            <IconsPet name='Dog (jasper)' picture={pet12}/>
        </div>
    )
}