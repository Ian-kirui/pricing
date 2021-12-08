import React from "react"
import {
  productCard,
  productDuration,
  productPrice,
} from "./productCardSponsor.module.css"

function App() {
  return <ProductCard duration="1 month" price="Ksh 10,000" />
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
