import React from "react"
import cardImage from "../images/katie-zaferes.png"
import starIcon from "../images/star.png"
import "../index.css"

export default function Card() {
    return (
        <section className="card">
            <div className="card__image">
                <div className="card__badge">SOLD OUT</div>
                <img src={cardImage} alt="Katie Zaferes" />
            </div>

            <div className="card__caption">
                <div className="card__rating">
                    <img src={starIcon} alt="star" />
                    <span className="card__score">5.0</span>
                    <span>(6)</span>
                    <span className="dot"></span>
                    <span>USA</span>
                </div>

                <p>Life lessons with Katie Zaferes</p>
                <p>
                    <span className="card__price">From $136</span> / person
                </p>
            </div>
        </section>
    )
}
