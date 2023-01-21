import React from 'react'

interface TextModel{
    children: string,
    className?: string
}

const Text: React.FC<TextModel> = ({children, className}) => {
  return (
    <p className={`${className} font-semibold`}>{children}</p>
  )
}

export default Text