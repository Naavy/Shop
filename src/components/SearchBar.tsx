import React, { FC, useContext } from "react"
import { ShopContext } from "../Context/ShopContex"
import Input from "./Input"

import "../styles/SearchBar.scss"

const SearchBar: FC = () => {
  const { text, setText } = useContext(ShopContext)

  return (
    <div className="search-bar">
      <Input
        variant="search"
        change={e => setText(e.target.value)}
        value={text}
        placeholder="Wyszukaj produkt"
      ></Input>
    </div>
  )
}

export default SearchBar
