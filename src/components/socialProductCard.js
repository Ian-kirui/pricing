import React from "react"
import {
  productCard,
  productDuration,
  productPrice,
} from "./socialProductCard.module.css"

function App() {
  return <SocialProductCard duration="2 weeks" price="Ksh 14,000" />
}

export default App

function SocialProductCard(props) {
  const { duration, price } = props
  return (
    <div className={productCard}>
      <div className={productDuration}>{duration}</div>
      <div className={productPrice}>{price}</div>
    </div>
  )
}
