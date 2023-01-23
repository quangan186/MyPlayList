import Background from '@/components/background/Background'
import background from "@/assets/gif/background.gif"
import MusicBoxContainer from '@/components/audio/MusicBoxContainer'
import SearchContainer from '@/components/search/SearchContainer'
import { useEffect, useState } from 'react'
import convertToMp3Api from './api/convertMp3Api/convertToMp3Api'
import Button from '@/utilities/Button'
// import {youtubeMp3Converter} from 'youtube-mp3-converter';

export default function Home() {
  const [currentLink, setCurrentLink] = useState<string>();

  useEffect(() => {
    // convertToMp3Api.getMp3Link("sOiMD45QGLs")
    const  getMp3Link = async(youtubeLink: string) =>{
      const fetchApi = await fetch(`https://youtube-mp36.p.rapidapi.com/dl?id=${youtubeLink}`, {
        headers: {
          'X-RapidAPI-Key': 'f67a6ec0ffmsh5fbe2152f4cb7f7p1151adjsnc93ad2e77038',
          'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
        }
      })
      
      fetchApi.json().then(res => {
        setCurrentLink(res.link)
      })
    }
    // console.log(getMp3Link)
    getMp3Link("Ws-QlpSltr8&ab")
  }, [])

  return (
    <div className='relative h-screen w-full'>
      <Background src={background} alt={""} />
      <div className='flex gap-8 absolute top-1/2 left-1/2 justify-center -translate-x-1/2 -translate-y-1/2 z-50 w-full max-h-[520px] px-20'>
        <MusicBoxContainer audioLink={currentLink} />
        <SearchContainer />
        {/* <a href="https://mgamma.123tokyo.xyz/get.php/3/5c/sOiMD45QGLs.mp3?cid=MmEwMTo0Zjg6YzAxMDo5ZmE2OjoxfE5BfERF&h=7UmrErXqb7byl1A9CjRz0Q&s=1674502559&n=%E3%80%90Ado%E3%80%91%E3%82%AE%E3%83%A9%E3%82%AE%E3%83%A9" target="_blank" rel='noreferrer' className='inline-block p-4 rounded-lg cursor-pointer my-4 hover:opacity-70 duration-300 bg-gradient-to-r from-primary-100 to-secondary text-black hover:-translate-y-2' download="An CV">Download PDF</a> */}

      </div>
    </div>
  )
}
