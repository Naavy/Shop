import React, { FC } from "react"

interface PriceProps {
  price: number
  customClass?: string
}

export const checkPrice = (price: number) => {
  let displayPrice: number
  if (price < 0) {
    displayPrice = 0
  } else {
    displayPrice = Number(price.toFixed(2))
  }
  return displayPrice
}

const Price: FC<PriceProps> = ({ price, customClass }) => {
  return <span className={customClass}>{checkPrice(price)} zł</span>
}

export default Price
