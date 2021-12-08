import React from "react"
import lineIcon from "../images/line.svg"
import { Card, GoldCardWrapper } from "./goldCard.module.css"

function App() {
  return (
    <div className={GoldCardWrapper}>
      <GoldCard title="Gold Business" duration="1 year" price="KSh 45,000" />
      <GoldCard title="Gold Business" duration="6 months" price="KSh 25,000" />
      <GoldCard title="Gold Business" duration="3 months" price="KSh 13,500" />
      <GoldCard title="Gold Business" duration="1 month" price="KSh 5,000" />
    </div>
  )
}
export default App

function GoldCard(props) {
  const { title, duration, price } = props

  return (
    <div className={Card}>
      <h4>{title}</h4>
      <img src={lineIcon}></img>
      <p>{duration}</p>
      <h3>{price}</h3>
    </div>
  )
}
