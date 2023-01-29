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
  volumeMute: boolean
  handleMuteClick: any
  setVolumeLevel: any
  volumeLevel: number
}
const MusicBoxContainer:React.FC<MusicBoxModel> = ({volumeLevel, setVolumeLevel, volumeMute, handleMuteClick, rangeRef, thumbRef, setPosition, setMarginLeft, setProgressBarWidth, position, progressBarWidth, marginLeft, getCurrentDuration, percentage, start, end, setDuration, togglePlayButton, onChange, handleOnClickPlayButton, audioRef,audioLink, title, songBanner}) => {
  return (
    <div className='w-full bg-white px-12 py-4 relative flex flex-col'>
      <audio ref={audioRef}  src={audioLink} preload="metadata" onLoadedData={(e) => setDuration(Math.floor(e.currentTarget.duration))} onTimeUpdate={getCurrentDuration} muted={volumeMute} ></audio>
      <MusicInfo className='h-full' banner={songBanner} title={title} />
      <AudioRange rangeRef={rangeRef} thumbRef={thumbRef} setPosition={setPosition} setMarginLeft={setMarginLeft} setProgressBarWidth={setProgressBarWidth} position={position} progressBarWidth={progressBarWidth} marginLeft={marginLeft} percentage={percentage} onChange={onChange} start={start} end={end} className='py-4' />
      <AudioButtonBar volumeLevel={volumeLevel} setVolumeLevel={setVolumeLevel} volumeMute={volumeMute} handleMuteClick={handleMuteClick} togglePlayButton={togglePlayButton} playFunc={handleOnClickPlayButton}/>
    </div>
  )
}

export default MusicBoxContainer