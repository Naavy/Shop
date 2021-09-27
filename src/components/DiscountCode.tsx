import React, { FC, useState, useContext } from "react"
import Button from "./Button"
import Input from "./Input"
import { ShopContext } from "../Context/ShopContex"

import "../styles/DiscountCode.scss"

const DiscountCode: FC = () => {
  const { fullCost, setFullCost } = useContext(ShopContext)
  const [code, setCode] = useState<string>("")
  const [codeIsUsed, setCodeIsUsed] = useState<boolean>(false)
  const codes = ["SOBRE_10", "SOBRE_20", "SOBRE_30"]

  const changeFullCost = (discount: number) => {
    return fullCost - fullCost * (discount * 0.01)
  }
  const checkCode = (code: string) => {
    if (codes.includes(code)) {
      if (codeIsUsed) {
        alert("użyłeś już kodu")
        return
      }
      const discount = codes.find(code => code === code)?.split("_")
      if (discount) {
        setFullCost(changeFullCost(Number(discount[1])))
        setCodeIsUsed(true)
      }
    } else {
      alert("Zły kod")
    }
  }

  console.log(Boolean(fullCost))

  return (
    <div className="discount-code">
      <Input
        change={e => setCode(e.target.value)}
        placeholder="KOD RABATOWY"
        variant="code"
        value={code}
      ></Input>
      <Button
        handler={() => checkCode(code)}
        variant="contained"
        disabled={!Boolean(fullCost)}
      >
        OK
      </Button>
    </div>
  )
}

export default DiscountCode
