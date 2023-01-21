import React from 'react'

interface ButtonModel{
    children: any,
    className?: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
}

const Button: React.FC<ButtonModel> = ({children, className, onClick}) => {
  return (
    <div>
        <button onClick={onClick} className={`${className}`} >{children}</button>
    </div>
  )
}

export default Button