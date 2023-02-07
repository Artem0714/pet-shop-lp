import React from "react";
import './Background.css';
import { BackgroundMainPage } from "./BackgroundMainPage";
import star from "../../UI/img/star.svg";
import yellowCups from "../../UI/img/yellow_cups_group.svg";
import { BackgroundOurService } from "./BackgroundOurService";
import { BackgroundMakingPet } from "./BackgroundMakingPet";
import { BackgroundCustumetReviews } from "./BackgroundCustumetReviews";
import { BackgroundTail } from "./BackgroundTail";


export const Background = () => {
    return(
        <div className="background">
            <BackgroundMainPage />
            <BackgroundOurService />
            <BackgroundMakingPet />
            <BackgroundCustumetReviews />
            <BackgroundTail />
        </div>
    )
}