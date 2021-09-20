import React, { FC, useContext } from "react"
import "./ShoppingBasket.scss"
import { FullCostContex } from "../Context/FullCostContex"

const Product: FC = () => {
  const fullCost = useContext(FullCostContex)
  return (
    <div className="basket-wrapper">
      <div className="title">Koszyk</div>
      <div className="full-cost">
        <span style={{ color: "grey" }}>Cena:</span> {fullCost}
      </div>
    </div>
  )
}

export default Product
