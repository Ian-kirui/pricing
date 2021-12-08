import React from "react"
import { Card, GoldCardWrapper } from "./goldAd.module.css"

function App() {
  return (
    <div className={GoldCardWrapper}>
      <GoldAd duration="1 month" price="Ksh 5,500" />
      <GoldAd duration="2 weeks" price="Ksh 3,000" />
      <GoldAd duration="1 week" price="Ksh 2,000" />
    </div>
  )
}

export default App

function GoldAd(props) {
  const { duration, price } = props
  return (
    <div className={Card}>
      <div>{duration}</div>
      <div>{price}</div>
    </div>
  )
}
