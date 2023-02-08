import React from "react";
import './Background.css';
import { BackgroundMainPage } from "./BackgroundMainPage";
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