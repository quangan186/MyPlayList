import React from 'react'

interface ButtonModel{
    type?: any,
    children: any,
    className?: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
}

const Button: React.FC<ButtonModel> = ({type, children, className, onClick}) => {
  return (
    <button type={type} onClick={onClick} className={`${className} outline-none`} >{children}</button>  
  )
}

export default Button