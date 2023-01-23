import Background from '@/components/background/Background'
import background from "@/assets/gif/background.gif"
import MusicBoxContainer from '@/components/audio/MusicBoxContainer'
import SearchContainer from '@/components/search/SearchContainer'
import { useEffect } from 'react'
// import {youtubeMp3Converter} from 'youtube-mp3-converter';

export default function Home() {

  return (
    <div className='relative h-screen w-full'>
      <Background src={background} alt={""} />
      <div className='flex gap-8 absolute top-1/2 left-1/2 justify-center -translate-x-1/2 -translate-y-1/2 z-50 w-full max-h-[520px] px-20'>
        <MusicBoxContainer />
        <SearchContainer />
      </div>
    </div>
  )
}
