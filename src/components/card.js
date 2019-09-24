import React from "react"

import cardStyles from "./card.module.scss"
import TomRomay from "../images/tom.jpg"

const Card = () => {
  return (
    <div className={[cardStyles.card].join(" ")}>
      <h1 className={cardStyles.cardTitle}>Tom Romay</h1>
      <div className={cardStyles.cardImage}>
        <img src={TomRomay} alt="" className={cardStyles.cardImage} />
      </div>
      <p className={cardStyles.cardContent}>This is Tom Douche Romay</p>
    </div>
  )
}

export default Card
