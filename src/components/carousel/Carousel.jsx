import React, { Children, cloneElement } from "react";


export const Carousel = (props) => {
    const pages = Children.map(props.children, (child, index) => {
        console.log(props.count);
        if (props.count === index) {
            return cloneElement( child, {
                style: {
                    maxWidth: "540px",
                    minWidth: "540px",
                    border: "5px solid rgba(34, 68, 83, 1)",
                }
            }) 
        }

        return cloneElement( child, {
            style: {
                maxWidth: "540px",
                minWidth: "540px",
                border: "1px solid rgba(34, 68, 83, 0.2)",
            }
        })
    })
    
    return(
        <div className="carousel" style={{transform: `translateX(-${props.size}px)`}}>
            {pages}
        </div>
    )
}