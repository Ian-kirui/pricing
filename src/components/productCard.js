import React from "react"
import {
  productCard,
  productDuration,
  productPrice,
} from "./productCard.module.css"

function App() {
  return <ProductCard duration="1 Year" price="kes 2,500" />
}

export default App

function ProductCard(props) {
  const { duration, price } = props
  return (
    <div className={productCard}>
      <div className={productDuration}>{duration}</div>
      <div className={productPrice}>{price}</div>
    </div>
  )
}
