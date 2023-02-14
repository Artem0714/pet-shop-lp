import React from "react";
import star from "../../UI/img/star.svg";
import four_page_background_text_p from "../../UI/img/four_page_background_text_p.svg";


export const BackgroundCustumetReviews = () => {
    return(
        <>
            <div className="bg-custumer-reviews">
                <div className="bg-cr-pic-star">
                    <img src={star} alt="star" />
                </div>
                <div className="bg-custumer-text-p">
                    <img src={four_page_background_text_p} alt="background_text_p" />
                </div>
            </div>
        </>
    )
}