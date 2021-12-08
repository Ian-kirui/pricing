import React from "react"
import lineIcon from "../images/line.svg"
import { Card, CardWrapper } from "./silverBiz.module.css"

function App() {
  return (
    <div className={CardWrapper}>
      <SilverCard
        title="Silver Business"
        duration="1 year"
        price="KSh 18,000"
      />
      <SilverCard
        title="Silver Business"
        duration="6 months"
        price="KSh 10,000"
      />
      <SilverCard
        title="Silver Business"
        duration="3 months"
        price="KSh 5,500"
      />
      <SilverCard
        title="Silver Business"
        duration="1 month"
        price="KSh 2,000"
      />
    </div>
  )
}
export default App

function SilverCard(props) {
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
