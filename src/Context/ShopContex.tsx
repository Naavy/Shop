import React, { useState, createContext } from "react"
import { ProductProps } from "../components/Product"

type ShopContextType = {
  fullCost: number
  setFullCost: React.Dispatch<React.SetStateAction<number>>
  text: string
  setText: React.Dispatch<React.SetStateAction<string>>
  productsSelected: ProductProps[]
  setProductsSelected: React.Dispatch<React.SetStateAction<ProductProps[]>>
}

export const ShopContext = createContext<ShopContextType>({} as ShopContextType)

export const ShopContextProvider = ({ children }) => {
  const [fullCost, setFullCost] = useState<number>(0)
  const [text, setText] = useState<string>("")
  const [productsSelected, setProductsSelected] = useState<Array<ProductProps>>(
    []
  )

  return (
    <ShopContext.Provider
      value={{
        fullCost,
        setFullCost,
        text,
        setText,
        productsSelected,
        setProductsSelected,
      }}
    >
      {children}
    </ShopContext.Provider>
  )
}
