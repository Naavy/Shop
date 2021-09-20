import * as React from "react"
import Product from "./Product"
import { products } from "../data"

import "./ProductsList.scss"

interface ProductType {
  id: number
  productName: string
  price: number
  image: string
}

const ProductsList = () => (
  <div className="products-wrapper">
    {products.map((product: ProductType) => {
      return (
        <Product price={product.price} image={product.image} key={product.id} />
      )
    })}
  </div>
)

export default ProductsList
