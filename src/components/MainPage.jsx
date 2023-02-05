import React from "react";
import '../UI/css/mainPage.css';
import available from "../UI/img/available.svg";
import { ChangeBlockAnimals } from "./changeBlock/ChangeBlockAnimals";
import orangeCups from "../UI/img/orange_cups_group_for_mainpage.svg";

export const MainPage = () => {
    return(
        <div className="mainpage">
            <div className="mainpage__text">
                <div className="mainpage__img">
                    <img className="mainpage_curve_arrow" src={available} alt="Vjuh" />
                    <h1 className="mainpage__firsttext">Available in select states</h1>
                </div>
                <div className="mainpage__text1">A pet-first</div>
                <div className="mainpage__text2">
                    approach to 
                    <img className="mainpage_orange_Cups" src={orangeCups} alt="orange cups group" />
                </div>
                <div className="mainpage__text1">wellness</div>
                <button className="mainpage__learnmore">Learn More</button>
            </div>
            <ChangeBlockAnimals />
        </div>
    )
}