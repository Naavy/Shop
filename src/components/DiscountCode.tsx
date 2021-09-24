import React, { FC, useState, useContext } from "react"
import { ShopContext } from "../Context/ShopContex"

import "../styles/DiscountCode.scss"

const DiscountCode: FC = () => {
  const { fullCost, setFullCost } = useContext(ShopContext)
  const [code, setCode] = useState<string>("")

  const changeCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value)
  }
  const changeFullCost = (discount: number) => {
    return fullCost - fullCost * discount
  }
  const checkCode = (code: string) => {
    switch (code) {
      case "SOBRE_10":
        setFullCost(changeFullCost(0.1))
        break
      case "SOBRE_20":
        setFullCost(changeFullCost(0.2))
        break
      case "SOBRE_30":
        setFullCost(changeFullCost(0.3))
        break

      default:
        alert("Zły kod")
    }
  }

  return (
    <div className="discount-code">
      <input
        onChange={changeCode}
        placeholder="KOD RABATOWY"
        className="discount-code__input"
      ></input>
      <button onClick={() => checkCode(code)} className="discount-code__button">
        OK
      </button>
    </div>
  )
}

export default DiscountCode
