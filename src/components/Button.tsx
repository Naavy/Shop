import React, { FC } from "react"

import "../styles/Button.scss"

interface ButtonProps {
  children: React.ReactNode
  handler: (() => void) | ((e: React.MouseEvent<HTMLElement>) => void)
  customClass?: string
  variant: "text" | "contained" | "outlined"
  disabled?: boolean
}

const Button: FC<ButtonProps> = ({
  children,
  handler,
  customClass,
  variant,
  disabled,
}) => {
  return (
    <button
      className={`button__${variant} ${customClass}`}
      onClick={handler}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
