import React from "react"
import starIcon from "../images/star.png"
import "../index.css"

export default function Card(props) {
    
    console.log('props', JSON.stringify(props, null, 2))
    const makeBadgeText = (openSpots, location) => {
        if (openSpots === 0) return "SOLD OUT"
        if (location === "Online") return "ONLINE"
    }
    
    const badgeText = makeBadgeText(props.openSpots, props.location)

    return (
        
        <section className="card">
            {badgeText && <div className="card__badge">{badgeText}</div>}
            <img src={require(`../images/${props.coverImg}`)} alt={props.img} />

            <div className="card__caption">
                <div className="card__rating">
                    <img src={starIcon} alt="star" />
                    <span className="card__score">{props.stats.rating}</span>
                    <span>({props.stats.reviewCount})</span>
                    <span className="dot"></span>
                    <span>{props.location}</span>
                </div>

                <p>{props.title}</p>
                <p>
                    <span className="card__price">From ${props.price}</span> / person
                </p>
            </div>
        </section>

    )
}
