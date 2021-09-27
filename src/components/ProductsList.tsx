import React, { useState, useEffect, useContext } from "react"
import Product from "./Product"
import { products } from "../data"
import { ShopContext } from "../Context/ShopContex"

import "../styles/ProductsList.scss"

interface ProductType {
  id: number
  name: string
  price: number
  image: string
}

const ProductsList = () => {
  const { text } = useContext(ShopContext)
  const [productsFound, setProductsFound] = useState<Array<ProductType>>([])

  useEffect(() => {
    if (text) {
      const results = products.filter(product => product.name.includes(text))
      setProductsFound(results)
    } else {
      setProductsFound(products)
    }
  }, [text])

  const productsFoundList = productsFound.map((product: ProductType) => {
    const { name, price, image, id } = product
    return <Product id={id} name={name} price={price} image={image} key={id} />
  })

  return <div className="products">{productsFoundList}</div>
}

export default ProductsList
