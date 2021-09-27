import React, { FC, useContext } from "react"
import "../styles/ShoppingCart.scss"

import { ShopContext } from "../Context/ShopContex"
import DiscountCode from "./DiscountCode"
import Price from "./Price"

const ShoppingCart: FC = () => {
  const { fullCost, productsSelected } = useContext(ShopContext)

  const productsSelectedList = productsSelected.map((product, index) => {
    const { name, price } = product
    return (
      <div key={index}>
        {name}: <Price price={price} />
      </div>
    )
  })

  return (
    <div className="cart">
      <div className="cart__title">Koszyk</div>
      <div className="cart__cost">
        <span className="cart__cost--title">Cena:</span>
        <Price price={fullCost} />
      </div>
      <div className="cart__products">
        <u>Twój koszyk</u>
        {productsSelectedList}
      </div>
      <DiscountCode />
    </div>
  )
}

export default ShoppingCart
