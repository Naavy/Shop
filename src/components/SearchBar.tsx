import React, { FC, useContext } from "react"
import { ShopContext } from "../Context/ShopContex"

import "../styles/SearchBar.scss"

const SearchBar: FC = () => {
  const { text, setText } = useContext(ShopContext)
  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }
  return (
    <div className="search-bar">
      <input
        className="search-bar__input"
        onChange={inputChange}
        value={text}
        placeholder="Wyszukaj produkt"
      ></input>
    </div>
  )
}

export default SearchBar
