import React, { FC, useContext } from "react"
import { StaticImage, getImage } from "gatsby-plugin-image"
import Price from "./Price"
import { ShopContext } from "../Context/ShopContex"
import Button from "./Button"
import { checkPrice } from "./Price"

import "../styles/Product.scss"

export interface ProductProps {
  id: number
  name: string
  image: string
  price: number
}

const Product: FC<ProductProps> = ({ id, name, image, price }) => {
  const imageWitdh = 100
  const imageAlt = `${name} image`
  const { fullCost, setFullCost, productsSelected, setProductsSelected } =
    useContext(ShopContext)

  const addProduct = () => {
    setFullCost(fullCost + checkPrice(price))
    if (productsSelected.find(product => product.id === id)) {
      alert("nie")
    } else {
      setProductsSelected(oldArray => [
        ...oldArray,
        { id: id, name: name, image: image, price: price },
      ])
    }
  }

  return (
    <div className="product">
      <Price price={price} customClass="product__price" />
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={imageWitdh}
        alt={imageAlt}
      />
      <Button variant="outlined" handler={addProduct}>
        DO KOSZYKA
      </Button>
    </div>
  )
}

export default Product
