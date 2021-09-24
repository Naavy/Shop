import React, { FC, useContext } from "react"
import { StaticImage } from "gatsby-plugin-image"
import Price from "./Price"
import { ShopContext } from "../Context/ShopContex"
import { checkPrice } from "./Price"

import "../styles/Product.scss"

export interface ProductProps {
  productName: string
  image: string
  price: number
}

const Product: FC<ProductProps> = ({ productName, image, price }) => {
  const imageWitdh = 100
  const imageAlt = `${productName} image`
  const { fullCost, setFullCost, productsSelected, setProductsSelected } =
    useContext(ShopContext)
  const addProduct = () => {
    setFullCost(fullCost + checkPrice(price))
    setProductsSelected(oldArray => [
      ...oldArray,
      { productName: productName, image: image, price: price },
    ])
  }

  return (
    <div className="product">
      <div className="product__price">
        <div className="product__price--value">
          <Price price={price} />
        </div>
      </div>
      <StaticImage
        // src={image}
        src="../images/gatsby-astronaut.png"
        width={imageWitdh}
        alt={imageAlt}
      />
      <button className="product__button-add" onClick={addProduct}>
        DO KOSZYKA
      </button>
    </div>
  )
}

export default Product
