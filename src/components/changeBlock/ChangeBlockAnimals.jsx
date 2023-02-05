import React from "react";
import './ChangeBlockAnimals.css';
import pictureAnimal from "../../UI/img/dog1_for_mainpage.svg";
import { ChangeButton } from "../buttons/ChangeButton";

export const ChangeBlockAnimals = () => {
    return(
        <div className="change-block-animals">
            <div className="chan-ba-picture">
                <img src={pictureAnimal} alt="Dog" />
            </div>
            <div className="chan-ba-switch">
                <ChangeButton deg={-135}/>
                <div className="chan-ba-swi-btn">
                    <button className="chan-ba-swi-btn-dot"></button>
                    <button className="chan-ba-swi-btn-dot"></button>
                    <button className="chan-ba-swi-btn-dot"></button>
                    <button className="chan-ba-swi-btn-dot"></button>
                    <button className="chan-ba-swi-btn-dot"></button>
                </div>
                <ChangeButton deg={45}/>
            </div>
        </div>
    )
}