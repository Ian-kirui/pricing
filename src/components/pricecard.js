import React from "react"
import laptopIcon from "../images/laptop.svg"
import { Card, CardWrapper } from "./pricecard.module.css"

function App() {
  return (
    <div className={CardWrapper}>
      <PriceCard category="Prescription" price="Ksh 4,500" />
      <PriceCard category="Over the counter" price="Ksh 4,000" />
    </div>
  )
}

export default App
function PriceCard(props) {
  const { category, price } = props
  return (
    <div className={Card}>
      {/* <img src={laptopIcon}></img> */}
      <h3>{category}</h3>
      <h5>{price}</h5>
    </div>
  )
}

// import React from "react"
// import laptopIcon from "../images/laptop.svg"
// import { priceCard } from "./pricecard.module.css"

// function App() {
//   console.log(App)
//   return (
//     <div>
//       <PriceCard laptop="laptop" electronics="Prescription" kes200="kes.200" />
//     </div>
//   )
// }
// export default App

// function PriceCard(props) {
//   const { laptop, electronics, kes200 } = props

//   return (
//     <div className={priceCard}>
//       <img src={laptopIcon}></img>
//       <h3>{electronics}</h3>
//       <p>{kes200}</p>
//     </div>
//   )
// }
