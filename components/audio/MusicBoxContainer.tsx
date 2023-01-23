import React, { useEffect, useRef, useState } from 'react'
import MusicInfo from '../info/MusicInfo'
import AudioButtonBar from './AudioButtonBar'
import banner from '@/assets/img/banner.jpg'
import AudioRange from './AudioProgress'

const MusicBoxContainer:React.FC = () => {
  const [togglePlayButton, setTogglePlayButton] = useState<boolean>(false);
  
  const audioRef = useRef<any>();
  const progressBarRef = useRef<any>();
  const animationRef = useRef<any>();

  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);

  const handleOnClickPlayButton = () => {
    const prevValue = togglePlayButton;
    setTogglePlayButton(state => !state)
    if (!prevValue){
      audioRef.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);

    } else{
      audioRef.current.pause();
      cancelAnimationFrame(animationRef.current)
    }
  }

  const whilePlaying = () =>{
    progressBarRef.current.value = audioRef.current.currentTime
    setCurrentTime(progressBarRef.current.value)
    animationRef.current = requestAnimationFrame(whilePlaying)
  }

  const onChangeCurrentTime = () =>{
    audioRef.current.currentTime = progressBarRef.current.value;
    setCurrentTime(progressBarRef.current.value)
  }

  const calcTime = (secs: number) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  }

  useEffect(() => {
    const seconds = Math.floor(audioRef.current.duration);
    setDuration(seconds)
    progressBarRef.current.max = seconds
  }, [audioRef?.current?.loadedmetadata, audioRef?.current?.readyState])

  return (
    <div className='w-full bg-white px-12 py-8'>
      <audio ref={audioRef} src="./audio.mp3" preload="metadata" ></audio>
      <MusicInfo banner={banner} title='Gira Gira' singer='Ado' />
      <AudioRange onChangeCurrentTime={onChangeCurrentTime} progressBarRef={progressBarRef} start={calcTime(currentTime)} end={calcTime(duration)} className='py-4' />
      <AudioButtonBar togglePlayButton={togglePlayButton} playFunc={() => handleOnClickPlayButton()}/>
    </div>
  )
}

export default MusicBoxContainer