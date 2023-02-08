import React from "react";
import './DifferentCategory.css';
import ycGroupMini from "../../UI/img/yellow_cups_group_mini.svg";

export const DifferentCategory = () => {
    return(
        <div className="yellow-circle">
            <div className="yc-around">
                <h1>
                <span className="char1">D</span>
                <span className="char2">i</span>
                <span className="char3">f</span>
                <span className="char4">f</span>
                <span className="char5">e</span>
                <span className="char6">r</span>
                <span className="char7">e</span>
                <span className="char8">n</span>
                <span className="char9">t</span>
                <span className="char10">c</span>
                <span className="char11">a</span>
                <span className="char12">t</span>
                <span className="char13">e</span>
                <span className="char14">g</span>
                <span className="char15">o</span>
                <span className="char16">r</span>
                <span className="char17">y</span>
                </h1>
            </div>
            <div className="yc-center">45+</div>
            <img src={ycGroupMini} alt="cups group" />
        </div>
    )
}