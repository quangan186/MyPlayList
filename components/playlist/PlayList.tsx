import Title from '@/utilities/Title'
import React from 'react'
import SongCard from '../card/SongCard'

interface PlayListModel{
  songs: any[]
  setSongs: any
  // onSelectSongClick: React.MouseEventHandler<HTMLDivElement>
  setCurrentAudioLink: any
  setChannel: any
  setSongImage: any
  setSongTitle: any
}

const PlayList: React.FC<PlayListModel> = ({songs,setSongs, setCurrentAudioLink, setChannel, setSongImage,setSongTitle}) => {
  const onDeleteSongClick = (id: string) => {
    setSongs(songs.filter(song => id !== song.id))
  }

  const playAudio = (song: any) => {
    const  getMp3Link = async() =>{
      const fetchApi = await fetch(`https://youtube-mp36.p.rapidapi.com/dl?id=${song.id}`, {
        headers: {
          'X-RapidAPI-Key': 'f67a6ec0ffmsh5fbe2152f4cb7f7p1151adjsnc93ad2e77038',
          'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
        }
      })
      
      fetchApi.json().then(res => {
        // setSearchResult(res)
        setCurrentAudioLink(res.link)
        console.log(res.link)
      })   
      setChannel(song.snippet.channelTitle)
      setSongImage(song.snippet.thumbnails.high.url)
      setSongTitle(song.snippet.title)

    }
    getMp3Link()
  }
  return (
    <div className='bg-black w-full px-4 overflow-y-scroll  relative'>
        <Title className='text-white text-xl tracking-wider py-4 z-50 bg-black sticky top-0'>
            My PlayList
        </Title>

        <div className='flex flex-col gap-8 py-4'>
          {songs.map((song: any) => {
            return (
              <SongCard banner={song.snippet.thumbnails.high.url} songName={song.snippet.title} onClick={() => playAudio(song)} onDeleteClick={() => onDeleteSongClick(song.id)} />
            )
          })}
          {/* <SongCard banner={banner} songName="Gira gira" />
          <SongCard banner={banner} songName="Gira gira" />
          <SongCard banner={banner} songName="Gira gira" />
          <SongCard banner={banner} songName="Gira gira" />
          <SongCard banner={banner} songName="Gira gira" />
          <SongCard banner={banner} songName="Gira gira" />
          <SongCard banner={banner} songName="Gira gira" />
          <SongCard banner={banner} songName="Gira gira" />
          <SongCard banner={banner} songName="Gira gira" />
          <SongCard banner={banner} songName="Gira gira" />
          <SongCard banner={banner} songName="Gira gira" />
          <SongCard banner={banner} songName="Gira gira" /> */}
        </div>
    </div>
  )
}

export default PlayList