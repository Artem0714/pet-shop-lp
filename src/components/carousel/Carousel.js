import React, { Children, cloneElement } from "react";


export const Carousel = (props) => {
    const classNames = {
        primary: 'class-name-for-primary-button',
        secondary: 'class-name-for-secondary-button',
    }

    const pages = Children.map(props.children, (child, index) => {
        if (props.count === index) {
            return cloneElement( child, {
                style: {
                    maxWidth: "540px",
                    minWidth: "540px",
                    backgroundColor: "rgba(251, 189, 8, 1)",
                },
                styleimg: {
                    backgroundColor: "rgba(235, 227, 204, 1)",
                },
                stylebtn: classNames.secondary
            }) 
        }

        return cloneElement( child, {
            style: {
                maxWidth: "540px",
                minWidth: "540px",
                border: "1px solid rgba(34, 68, 83, 0.2)",
            },
            stylebtn: classNames.primary
        })
    })
    
    return(
        <div className="carousel" style={{transform: `translateX(-${props.size}px)`}}>
            {pages}
        </div>
    )
}