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
      <input type="range" min="0" max="100" className='w-[100px]' value={volumeLevel} onChange={e => setVolumeLevel(e.currentTarget.value)} />
    </div>
  )
}

export default VolumeBar