import React, { FC, ChangeEventHandler } from "react"

import "../styles/Input.scss"

interface ButtonProps {
  change: ChangeEventHandler<HTMLInputElement> | undefined
  customClass?: string
  variant: "search" | "code"
  value: string
  placeholder: string
}

const Input: FC<ButtonProps> = ({
  change,
  customClass,
  variant,
  value,
  placeholder,
}) => {
  return (
    <input
      className={`input__${variant} ${customClass}`}
      onChange={change}
      value={value}
      placeholder={placeholder}
    ></input>
  )
}

export default Input
