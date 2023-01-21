import Image from 'next/image'
import React from 'react'
import MusicBoxContainer from '../audio/MusicBoxContainer'

interface BackgroundModel{
    src: any,
    alt?: any
}

const Background:React.FC<BackgroundModel> = ({src, alt}) => {
  return (
    <div className='w-full h-screen relative'>
        <Image src={src} alt={alt} className={"w-full h-full object-cover"} />
        <MusicBoxContainer />
    </div>
  )
}

export default Background