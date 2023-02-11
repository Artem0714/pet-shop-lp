import React, { useState } from "react";
import './OurService.css';
import { ChangeButton } from "./buttons/ChangeButton";
import { OurServiceSpecialist } from "./OurServiceSpecialist";
import { Carousel } from "./carousel/Carousel";
import device1 from "../UI/img/device1.svg";
import device2 from "../UI/img/device2.svg";
import device3 from "../UI/img/device3.svg";

const specialists = [
    {id: 1, img: device1, title: 'Pharmacy', content: 'Apoquel is an oral tablet that works differently than other allergy medications. It goes straight to the source to help relieve itch and inflammation at its core—addressing the underlying cause of irritation.'},
    {id: 2, img: device2, title: 'Breed-specific Haircuts', content: 'Apoquel is an oral tablet that works differently than other allergy medications. It goes straight to the source to help relieve itch and inflammation at its core—addressing the underlying cause of irritation.'},
    {id: 3, img: device3, title: 'Cloths', content: "Is your dog at the top of his/her fashion game? Don't forget a dog bikini or swim trunks for your pet's next vacation! Whether poolside, at the beach, or on the yacht, your pooch will look summer-ready."}
];

export const OurService = (props) => {
    const [offset, setOffset] = useState(0);
    const [count, setCount] =useState(0);

    const handleLeftArrowClick = () => {
        setCount((currentCount)=> {
            if (currentCount > 0) {
                return (currentCount - 1) 
            } 
            return currentCount
        })
        

        setOffset((currentOffset) => {
            return Math.max(currentOffset - 570, 0)
        })
    }

    const handleRightArrowClick = () => {
        setCount((currentCount)=> {
            if (currentCount < 2) {
                return (currentCount + 1)
            }
            return currentCount
        })
        
        setOffset((currentOffset) => {
            const maxOffset = 570*(specialists.length-1)
            return Math.min(currentOffset + 570, maxOffset)
        })
    }

    console.log(count);

    return(
        <div className="our-service">
            <div className="os-titel">
                <h1>Our service</h1>
            </div>
            <div className="os-carousel">
                <Carousel size={offset} count={count}>
                    <OurServiceSpecialist specialist={specialists[0]}/>
                    <OurServiceSpecialist specialist={specialists[1]}/>
                    <OurServiceSpecialist specialist={specialists[2]}/>
                </Carousel>
            </div>
            <div className="os-slider-btn">
                <ChangeButton onClick={handleLeftArrowClick} deg={-180}/>
                <ChangeButton onClick={handleRightArrowClick} border={3} gorizontal={-30} vertical={0} deg={0}/>
            </div>
        </div>
    )
}

