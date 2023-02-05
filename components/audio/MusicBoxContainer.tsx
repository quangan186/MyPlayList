import React from 'react'
import MusicInfo from '../info/MusicInfo'
import AudioButtonBar from './AudioButtonBar'
import AudioRange from './AudioProgress'
import VolumeBar from './VolumeBar'

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
  nextFunc: any
  prevFunc: any
  loopFunc: any
  isLooped: boolean
  handleLoopOnceButton: any
  isLoopedOnce: boolean,
  onShowPlaylist: any
}
const MusicBoxContainer:React.FC<MusicBoxModel> = ({onShowPlaylist, isLoopedOnce, handleLoopOnceButton, isLooped, loopFunc, prevFunc, nextFunc, volumeLevel, setVolumeLevel, volumeMute, handleMuteClick, rangeRef, thumbRef, setPosition, setMarginLeft, setProgressBarWidth, position, progressBarWidth, marginLeft, getCurrentDuration, percentage, start, end, setDuration, togglePlayButton, onChange, handleOnClickPlayButton, audioRef,audioLink, title, songBanner}) => {
  return (
    <div className={`w-full h-full border border-gray-300 rounded-lg shadow-lg p-4 relative flex flex-col ${audioLink ? "" : "pointer-events-none opacity-70"}`}>
      <audio ref={audioRef} loop={isLoopedOnce}  src={audioLink} preload="metadata" onLoadedData={(e) => setDuration(Math.floor(e.currentTarget.duration))} onTimeUpdate={getCurrentDuration} muted={volumeMute} ></audio>
      <MusicInfo onShowPlaylist={onShowPlaylist} togglePlayButton={togglePlayButton} className='h-full' banner={songBanner} title={title} />
      <AudioRange rangeRef={rangeRef} thumbRef={thumbRef} setPosition={setPosition} setMarginLeft={setMarginLeft} setProgressBarWidth={setProgressBarWidth} position={position} progressBarWidth={progressBarWidth} marginLeft={marginLeft} percentage={percentage} onChange={onChange} start={start} end={end} className='py-2' />
      <AudioButtonBar isLoopedOnce={isLoopedOnce} handleLoopOnceButton={handleLoopOnceButton} isLooped={isLooped} loopFunc={loopFunc} prevFunc={prevFunc} nextFunc={nextFunc} volumeLevel={volumeLevel} setVolumeLevel={setVolumeLevel} volumeMute={volumeMute} handleMuteClick={handleMuteClick} togglePlayButton={togglePlayButton} playFunc={handleOnClickPlayButton}/>
      <VolumeBar volumeLevel={volumeLevel} setVolumeLevel={setVolumeLevel} volumeMute={volumeMute} handleMuteClick={handleMuteClick} />
    </div>
  )
}

export default MusicBoxContainer