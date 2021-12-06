import React from "react"
import laptopIcon from "../images/laptop.svg"
import { priceCard } from "./pricecard.module.css"

function App() {
  return (
    <PriceCard laptop="laptop" electronics="Electronics" kes200="kes.200" />
  )
}
export default App

function PriceCard(props) {
  const { laptop, electronics, kes200 } = props

  return (
    <div className={priceCard}>
      <img src={laptopIcon}></img>
      <h3>{electronics}</h3>
      <p>{kes200}</p>
    </div>
  )
}
