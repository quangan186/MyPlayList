import React, { useEffect, useRef, useState } from 'react'
import MusicInfo from '../info/MusicInfo'
import AudioButtonBar from './AudioButtonBar'
import banner from '@/assets/img/banner.jpg'
import AudioRange from './AudioProgress'

interface MusicBoxModel{
  audioLink: string
  songBanner: string
  title: string
  audioRef: any
  handleOnClickPlayButton: any
  onChange: any
  progressBarRef: any
  togglePlayButton: boolean
  start: string
  end: string
  setDuration:any
  setCurrentTime: any
  percentage: number
  getCurrentDuration: any
  rangeRef: any 
  thumbRef: any 
  setPosition: any 
  setMarginLeft: any 
  setProgressBarWidth: any
  position: any
  progressBarWidth: any
  marginLeft: any
}
const MusicBoxContainer:React.FC<MusicBoxModel> = ({rangeRef, thumbRef, setPosition, setMarginLeft, setProgressBarWidth, position, progressBarWidth, marginLeft, getCurrentDuration, percentage, start, end, setDuration, togglePlayButton, onChange, handleOnClickPlayButton, audioRef,audioLink, title, songBanner}) => {
  return (
    <div className='w-full bg-white px-12 py-4 relative flex flex-col'>
      <audio ref={audioRef} src={audioLink} preload="metadata" onLoadedData={(e) => setDuration(Math.floor(e.currentTarget.duration))} onTimeUpdate={getCurrentDuration} ></audio>
      <MusicInfo className='h-full' banner={songBanner} title={title} />
      <AudioRange rangeRef={rangeRef} thumbRef={thumbRef} setPosition={setPosition} setMarginLeft={setMarginLeft} setProgressBarWidth={setProgressBarWidth} position={position} progressBarWidth={progressBarWidth} marginLeft={marginLeft} percentage={percentage} onChange={onChange} start={start} end={end} className='py-4' />
      <AudioButtonBar togglePlayButton={togglePlayButton} playFunc={handleOnClickPlayButton}/>
    </div>
  )
}

export default MusicBoxContainer