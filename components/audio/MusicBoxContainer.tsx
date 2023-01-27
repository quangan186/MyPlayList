import React, { useEffect, useRef, useState } from 'react'
import MusicInfo from '../info/MusicInfo'
import AudioButtonBar from './AudioButtonBar'
import banner from '@/assets/img/banner.jpg'
import AudioRange from './AudioProgress'

interface MusicBoxModel{
  audioLink: string,
  songBanner: string,
  title: string,
  singer: string
  audioRef: any
  handleOnClickPlayButton: any
  onChangeCurrentTime: any
  progressBarRef: any
  togglePlayButton: boolean
  start: string
  end: string
}
const MusicBoxContainer:React.FC<MusicBoxModel> = ({start, end, togglePlayButton, onChangeCurrentTime, progressBarRef, handleOnClickPlayButton, audioRef,audioLink, title, songBanner, singer}) => {
  return (
    <div className='w-full bg-white px-12 py-8 relative flex flex-col'>
      <audio ref={audioRef} src={audioLink} preload="metadata" ></audio>
      <MusicInfo className='h-full' banner={songBanner} title={title} singer={singer}/>
      <AudioRange onChangeCurrentTime={onChangeCurrentTime} progressBarRef={progressBarRef} start={start} end={end} className='py-4' />
      <AudioButtonBar togglePlayButton={togglePlayButton} playFunc={handleOnClickPlayButton}/>
    </div>
  )
}

export default MusicBoxContainer