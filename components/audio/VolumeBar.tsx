import Image from 'next/image'
import React, { useState } from 'react'
import highVolume from '@/assets/svg/highVolume.svg'
import lowVolume from '@/assets/svg/lowVolume.svg'

import Button from '@/utilities/Button'
import mute from '@/assets/svg/mute.svg'

interface VolumeBarModel{
  volumeMute: boolean
  handleMuteClick: any
  setVolumeLevel: any
  volumeLevel: number
}
const VolumeBar: React.FC<VolumeBarModel> = ({volumeLevel, volumeMute, handleMuteClick, setVolumeLevel}) => {
  return (
    <div className='inline-flex w-full justify-end gap-2 pt-4'>
      <Button onClick={() => handleMuteClick()}>
        <Image src={volumeMute ? mute : lowVolume} alt="" className='w-[20px] h-[20px]'/>  
      </Button>

      <div className='relative flex items-center w-full'>
        <div style={{
          backgroundColor: `white`,
          width: `calc(${volumeLevel}% * 2)`,
          height: '4px',
        }} 
        className='pointer-events-none absolute top-0 translate-y-2 rounded-[6px] w-full'></div>
        <input 
          type="range" min="0" max="50" className='w-full volume-bar pointer-events-auto' value={volumeLevel} onChange={e => setVolumeLevel(e.currentTarget.value)} />
      </div>

      <Button onClick={() => handleMuteClick()}>
        <Image src={volumeMute ? mute : highVolume} alt="" className='w-[20px] h-[20px]'/>  
      </Button>
    </div>
  )
}

export default VolumeBar