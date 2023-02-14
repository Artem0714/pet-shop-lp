import React, { useState } from "react";
import fourth_page_img_client from "../UI/img/fourth_page_img_client.svg";
import four_page_star_for_img from "../UI/img/four_page_star_for_img.svg";
import './FourthPage.css';
import { ChangeButton } from "./buttons/ChangeButton";

const clients = [
    {id: 1, img: fourth_page_img_client, title: 'Customer Reviews', content: 'As we continue to push for better regulation in the Australian pet food industry it can be hard to trust many pet food brands. Our 2021 Best Cat Food in Australia list will offer you a great starting point in deciding what to feed your cat.'},
    {id: 2, img: fourth_page_img_client, title: 'Breed-specific Haircuts', content: 'Apoquel is an oral tablet that works differently than other allergy medications. It goes straight to the source to help relieve itch and inflammation at its core—addressing the underlying cause of irritation.'},
    {id: 3, img: fourth_page_img_client, title: 'Cloths', content: "Is your dog at the top of his/her fashion game? Don't forget a dog bikini or swim trunks for your pet's next vacation! Whether poolside, at the beach, or on the yacht, your pooch will look summer-ready."},
    {id: 4, img: fourth_page_img_client, title: 'Breed-specific Haircuts', content: 'Apoquel is an oral tablet that works differently than other allergy medications. It goes straight to the source to help relieve itch and inflammation at its core—addressing the underlying cause of irritation.'},
    {id: 5, img: fourth_page_img_client, title: 'Breed-specific Haircuts', content: 'Apoquel is an oral tablet that works differently than other allergy medications. It goes straight to the source to help relieve itch and inflammation at its core—addressing the underlying cause of irritation.'},
];

export const FourthPage = (props) => {
    const [offset, setOffset] = useState(0);
    
    const handleLeftArrowClick = () => {
        setOffset((currentOffset) => {
            if (currentOffset === 0) {
                return currentOffset
            }
            return --currentOffset
        })
    }

    const handleRightArrowClick = () => {
        setOffset((currentOffset) => {
            if (currentOffset === (clients.length - 1)) {
                return currentOffset
            }
            return (++currentOffset)
        })
    }

    const handleClick = (test) => {
        setOffset(() => test.target.id - 1)
    }

    const dotClient = clients.map((client) => {
        return (<button key={client.id} id={client.id} onClick={handleClick} className="chan-ba-swi-btn-dot" />)
    })
    
    return(
        <div className="fourth-page-main">
            <div className="block-img-main">
                <img className="star_for_img" src={four_page_star_for_img} alt="star_for_img" />
                <div className="img-client">
                    <img src={clients[offset].img} alt="img_client" />
                </div>
                <div className="fourth-page-background-for-slider-dots-img">
                    <div className="slider-dots">
                        {dotClient}
                    </div>
                </div>
            </div>
            <div className="discription">
                <div className="discription-titel-and-p">
                    <h1>{clients[offset].title}</h1>
                    <p>{clients[offset].content}</p>
                </div>
                <div className="block-slider-btn">
                    <ChangeButton onClick={handleLeftArrowClick} deg={-180}/>
                    <ChangeButton onClick={handleRightArrowClick} border={3} gorizontal={-30} vertical={0} deg={0}/>
                </div>
            </div>
        </div>
    )
}