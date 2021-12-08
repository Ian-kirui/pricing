import React from "react"
import lineIcon from "../images/line.svg"
import { card, bannerCards } from "./bannerCard.module.css"

function App() {
  return (
    <div className={bannerCards}>
      <BannerCard
        title="Desktop/Mobile Homepage (top)"
        duration="1 week"
        price="KSh 20,000"
      />
      <BannerCard
        title="Desktop/Mobile Homepage (bottom)"
        duration="1 week"
        price="KSh 10,000"
      />
      <BannerCard
        title="Desktop/Mobile Category Page (top)"
        duration="1 week"
        price="KSh 15,000"
      />
      <BannerCard
        title="Desktop/Mobile Category Page (sidebar)"
        duration="1 week"
        price="KSh 5,000"
      />
      <BannerCard
        title="Desktop/Mobile Category Page (bottom)"
        duration="1 week"
        price="KSh 10,000"
      />
      <BannerCard
        title="Desktop/Mobile Category Page (top)"
        duration="1 week"
        price="KSh 15,000"
      />
      <BannerCard
        title="Desktop/Mobile Category Page (bottom)"
        duration="1 week"
        price="KSh 10,000"
      />
      <BannerCard
        title="Newsletter Banner"
        duration="1 week"
        price="KSh 5,000"
      />
    </div>
  )
}
export default App

function BannerCard(props) {
  const { title, duration, price } = props

  return (
    <div className={card}>
      <h4>{title}</h4>
      <img src={lineIcon}></img>
      <h3>{price}</h3>
      <p>{duration}</p>
    </div>
  )
}
