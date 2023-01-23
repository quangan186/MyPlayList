import React from 'react'

interface ButtonModel{
    children: any,
    className?: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
}

const Button: React.FC<ButtonModel> = ({children, className, onClick}) => {
  return (
    <button onClick={onClick} className={`${className}`} >{children}</button>  
  )
}

export default Button