import Background from '@/components/background/Background'
import background from "@/assets/gif/background.gif"
import MusicBoxContainer from '@/components/audio/MusicBoxContainer'
import SearchContainer from '@/components/search/SearchContainer'
import { useEffect, useRef, useState } from 'react'
import PlayList from '@/components/playlist/PlayList'
// import {youtubeMp3Converter} from 'youtube-mp3-converter';

// https://www.youtube.com/watch?v=Ws-QlpSltr8&ab_channel=ĐenVâuOfficial
export default function Home() {  
  const audioRef = useRef<any>();
  const progressBarRef = useRef<any>();
  const animationRef = useRef<any>();

  const [togglePlayButton, setTogglePlayButton] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);

  const [currentAudioLink, setCurrentAudioLink] = useState<string>("");
  const [youtubeLink, setYoutubeLink] = useState<string>("")
  const [searchResult, setSearchResult] = useState<any>()
  
  const [songImage, setSongImage] = useState<string>("")
  const [songTitle, setSongTitle] = useState<string>("")
  const [channel, setChannel] = useState<string>("")

  const [searchAudioLink, setSearchLinkAudio] = useState<string>("")

  const [songs, setSongs] = useState<any[]>([])

  useEffect(() => {
    if (currentTime == duration) {
      handleOnClickPlayButton()
      timeTravel(0)
    }
  }, [currentTime])

  const timeTravel = (newTime: number) => {
    progressBarRef.current.value = newTime;
    audioRef.current.currentTime = progressBarRef.current.value;
    setCurrentTime(progressBarRef.current.value);
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

  const handleOnClickPlayButton = () => {  
    const prevValue = togglePlayButton;
    setTogglePlayButton(state => !state)

    if (!prevValue && currentAudioLink){
      audioRef.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else{
      audioRef.current.pause();
      cancelAnimationFrame(animationRef.current)
    }
  }

  const onChangeLinkYoutube = (e: any) => {
    setYoutubeLink(e.target.value)
  }

  const searchVideoMp3 = () => {
    const url = new URL(youtubeLink)
    console.log(url.searchParams.get("v"))
    const  getVideoInformation = async() =>{
      const fetchApi = await fetch(`https://www.googleapis.com/youtube/v3/videos?id=${url.searchParams.get("v")}&key=AIzaSyCy53gb1X9v_9HqEe1tyWeIYU0Y7mx8ioI&part=snippet`)
      
      fetchApi.json().then(res => {
        setSearchResult(res.items[0])
      })   
    }

    const  getMp3Link = async() =>{
      const fetchApi = await fetch(`https://youtube-mp36.p.rapidapi.com/dl?id=${url.searchParams.get("v")}`, {
        headers: {
          'X-RapidAPI-Key': 'f67a6ec0ffmsh5fbe2152f4cb7f7p1151adjsnc93ad2e77038',
          'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
        }
      })
      
      fetchApi.json().then(res => {
        setSearchLinkAudio(res.link)
        console.log(res.link)
      })   
    }
    getVideoInformation()
    getMp3Link()
  }

  return (
    <div className='relative h-screen w-full'>
      <Background src={background} alt={""} />
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full px-20'>
        <SearchContainer handleOnClickPlayButton={() => handleOnClickPlayButton()} setSongs={setSongs} searchAudioLink={searchAudioLink} onSearchClick={() => searchVideoMp3()} onChange={(e: any) => onChangeLinkYoutube(e)} searchResult={searchResult} setCurrentAudioLink={setCurrentAudioLink} setChannel={setChannel} setSongImage={setSongImage} setSongTitle={setSongTitle}/>
        <div className='flex gap-8 justify-center max-h-[520px]'>
          <MusicBoxContainer handleOnClickPlayButton={() => handleOnClickPlayButton()} onChangeCurrentTime={onChangeCurrentTime} start={calcTime(currentTime)} end={calcTime(duration)} togglePlayButton={togglePlayButton} progressBarRef={progressBarRef}  audioRef={audioRef} audioLink={currentAudioLink} songBanner={songImage} title={songTitle} singer={channel}/>
          <PlayList songs={songs} setSongs={setSongs} setCurrentAudioLink={setCurrentAudioLink} setChannel={setChannel} setSongImage={setSongImage} setSongTitle={setSongTitle}/>
          {/* <a href="https://mgamma.123tokyo.xyz/get.php/3/5c/sOiMD45QGLs.mp3?cid=MmEwMTo0Zjg6YzAxMDo5ZmE2OjoxfE5BfERF&h=7UmrErXqb7byl1A9CjRz0Q&s=1674502559&n=%E3%80%90Ado%E3%80%91%E3%82%AE%E3%83%A9%E3%82%AE%E3%83%A9" target="_blank" rel='noreferrer' className='inline-block p-4 rounded-lg cursor-pointer my-4 hover:opacity-70 duration-300 bg-gradient-to-r from-primary-100 to-secondary text-black hover:-translate-y-2' download="An CV">Download PDF</a> */}
        </div>
      </div>
    </div>
  )
}
