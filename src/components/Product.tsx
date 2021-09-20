import React, { FC, useContext } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { FullCostContex } from "../Context/FullCostContex"

import "./Product.scss"

interface ProductProps {
  image: string
  price: number
}

const Product: FC<ProductProps> = ({ image, price }) => {
  const { fullCost, setFullCost } = useContext(FullCostContex)

  const addProduct = () => {
    setFullCost(1)
  }

  return (
    <div className="product-wrapper">
      <div className="price-wrapper">
        <div className="price">{price} zł</div>
      </div>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={100}
        alt="A Gatsby astronaut"
      />
      <button className="button-add" onClick={addProduct}>
        DO KOSZYKA
      </button>
    </div>
  )
}

export default Product
