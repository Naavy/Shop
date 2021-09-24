import React from "react"
import ProductsList from "../components/ProductsList"
import ShoppingBasket from "../components/ShoppingBasket"
import SearchBar from "../components/SearchBar"

import { ShopContextProvider } from "../Context/ShopContex"

import "../styles/App.scss"

const App = () => {
  return (
    <div className="main">
      <ShopContextProvider>
        <div className="main__content">
          <SearchBar />
          <ProductsList />
        </div>
        <ShoppingBasket />
      </ShopContextProvider>
    </div>
  )
}

export default App
