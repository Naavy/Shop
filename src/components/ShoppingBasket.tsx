import React, { FC, useContext } from "react"
import "../styles/ShoppingBasket.scss"

import { ShopContext } from "../Context/ShopContex"
import DiscountCode from "./DiscountCode"
import Price from "./Price"

const Product: FC = () => {
  const { fullCost, productsSelected } = useContext(ShopContext)

  const productsSelectedList = productsSelected.map(product => {
    return (
      <div>
        {product.productName}: <Price price={product.price} />
      </div>
    )
  })

  return (
    <div className="basket">
      <div className="basket__title">Koszyk</div>
      <div className="basket__cost">
        <span className="basket__cost--title">Cena:</span>
        <Price price={fullCost} />
      </div>
      <div className="basket__products">
        <u>Twój koszyk</u>
        {productsSelectedList}
      </div>
      <DiscountCode />
    </div>
  )
}

export default Product
