import React, { useState } from "react"
import ProductsList from "../components/ProductsList"
import ShoppingBasket from "../components/ShoppingBasket"
import { FullCostContex } from "../Context/FullCostContex"
import { fullCost } from "../data"

const IndexPage = () => {
  const [fullCost, setFullCost] = useState<number>(0)

  return (
    <FullCostContex.Provider value={(fullCost, setFullCost)}>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <ProductsList />
        <ShoppingBasket />
      </div>
    </FullCostContex.Provider>
  )
}

export default IndexPage
