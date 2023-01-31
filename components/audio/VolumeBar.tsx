import Image from 'next/image'
import React, { useState } from 'react'
import volume from '@/assets/svg/volume.svg'
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
    <div className='inline-flex w-full justify-end gap-2'>
      <Button onClick={() => handleMuteClick()}>
        <Image src={volumeMute ? mute : volume} alt="" className='w-[20px] h-[20px]'/>  
      </Button>

      <div className='relative'>
        <div style={{
          backgroundColor: `blue`,
          width: `calc(${volumeLevel}px * 2)`,
          height: '6px',
        }} 
        className='pointer-events-none absolute top-0 translate-y-3 rounded-[6px] w-full'></div>
        <input 
          type="range" min="0" max="50" className='w-[100px] volume-bar pointer-events-auto' value={volumeLevel} onChange={e => setVolumeLevel(e.currentTarget.value)} />
      </div>
    </div>
  )
}

export default VolumeBar