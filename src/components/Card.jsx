import React from "react"
//import cardImg from "../images/katie-zaferes.png"
import ratingStar from "/images/star.png"

function Card(props) {
    let badgeText
    if (props.card.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.card.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className="card--img" src={`/images/${props.card.coverImg}`} alt="card image" />
            <div className="card--stats">
                <img className="card--rating-star" src={ratingStar} alt="rating star" />
                <span>{props.card.stats.rating}</span>
                <span className="gray">({props.card.stats.reviewCount}) • </span>
                <span className="gray"> {props.card.location} </span>
            </div>
            <h2 className="card--title">{props.card.title}</h2>
            <p className="card--price"><span className="bold">From ${props.card.price}</span> / person</p>
        </div>
    )
}

export default Card;