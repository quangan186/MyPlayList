import React from 'react'
import MusicInfo from '../info/MusicInfo'
import AudioButtonBar from './AudioButtonBar'
import banner from '@/assets/img/banner.jpg'
import AudioRange from './AudioProgress'
const MusicBoxContainer:React.FC = () => {
  return (
    <div className='bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 px-12 py-8'>
      <MusicInfo banner={banner} title='Gira Gira' singer='Ado' />
      <AudioRange start='0:00' end='3:12' className='py-4' />
      <AudioButtonBar />
    </div>
  )
}

export default MusicBoxContainer