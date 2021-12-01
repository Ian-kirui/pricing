import React from "react"
import lineIcon from "../../public/assets/line.svg"
import { card } from "./bannerCard.module.css"

function App() {
  return (
    <BannerCard
      title="Desktop/Mobile Homepage (top)"
      duration="1 month"
      price="10,000"
    />
  )
}
export default App

function BannerCard(props) {
  const { title, duration, price } = props

  return (
    <div className={card}>
      <h4>{title}</h4>
      <img src={lineIcon}></img>
      <h3>{duration}</h3>
      <p>{price}</p>
    </div>
  )
}
