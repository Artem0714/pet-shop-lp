import React from "react";
import './OurServiceSpecialist.css';
import device1 from "../UI/img/device1.svg";
import device2 from "../UI/img/device2.svg";
import device3 from "../UI/img/device3.svg";

const specialists = [
    {id: 1, img: device1, title: 'Pharmacy', content: 'Apoquel is an oral tablet that works differently than other allergy medications. It goes straight to the source to help relieve itch and inflammation at its core—addressing the underlying cause of irritation.'},
    {id: 2, img: device2, title: 'Breed-specific Haircuts', content: 'Apoquel is an oral tablet that works differently than other allergy medications. It goes straight to the source to help relieve itch and inflammation at its core—addressing the underlying cause of irritation.'},
    {id: 3, img: device3, title: 'Cloths', content: "Is your dog at the top of his/her fashion game? Don't forget a dog bikini or swim trunks for your pet's next vacation! Whether poolside, at the beach, or on the yacht, your pooch will look summer-ready."}
];

export const OurServiceSpecialist = (props) => {
    const result = specialists.map((specialist) =>
        <div className="os-specialist" style={{background: `${props.color}`, border: `${props.border}`}}>
            <div className="os-spec-circle-divece">
                <img src={specialist.img} alt="device"/>
            </div>
            <div key={specialist.id} className="os-specialist-description">
                <h3>{specialist.title}</h3>
                <p>{specialist.content}</p>
            </div>
            <div key={specialist.id} className="os-specialist-btn">
                <button>Explore</button>
            </div>
        </div>
    )   
    
    return(
        <div className="os-block-specialists">
            {result}
        </div>  
    )
}
