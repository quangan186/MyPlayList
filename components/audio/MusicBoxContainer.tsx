import React, { useEffect, useRef, useState } from 'react'
import MusicInfo from '../info/MusicInfo'
import AudioButtonBar from './AudioButtonBar'
import banner from '@/assets/img/banner.jpg'
import AudioRange from './AudioProgress'

const MusicBoxContainer:React.FC = () => {
  const [togglePlayButton, setTogglePlayButton] = useState<boolean>(false);
  const audioRef = useRef<any>();
  
  const handleOnClickPlayButton = () => {
    const prevValue = togglePlayButton;
    setTogglePlayButton(state => !state)

    if (!prevValue){
      audioRef.current.play();
    } else{
      audioRef.current.pause();
    }
  }

  return (
    <div className='bg-white absolute top-1/2 left-1/2 flex justify-center flex-col items-center -translate-x-1/2 -translate-y-1/2 z-50 px-12 py-8'>
      <audio ref={audioRef} src="https://youtu.be/sOiMD45QGLs" preload="metadata" ></audio>
      <MusicInfo banner={banner} title='Gira Gira' singer='Ado' />
      <AudioRange start='0:00' end='3:12' className='py-4' />
      <AudioButtonBar togglePlayButton={togglePlayButton} playFunc={() => handleOnClickPlayButton()}/>
    </div>
  )
}

export default MusicBoxContainer