import React from 'react'

interface TitleModel{
    children: string,
    className?: string
}

const Title: React.FC<TitleModel> = ({children, className}) => {
  return (
    <h1 className={`${className}`}>{children}</h1>
  )
}

export default Title