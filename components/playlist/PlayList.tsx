import Title from '@/utilities/Title'
import React from 'react'
import SongCard from '../card/SongCard'

interface PlayListModel{
  songs: any[]
  setSongs: any
  // onSelectSongClick: React.MouseEventHandler<HTMLDivElement>
  setCurrentAudioLink: any
  setSongImage: any
  setSongTitle: any
}

const PlayList: React.FC<PlayListModel> = ({songs,setSongs, setCurrentAudioLink, setSongImage,setSongTitle}) => {
  const onDeleteSongClick = (id: string) => {
    setSongs(songs.filter(song => id !== song.searchResult.id))
  }

  const playAudio = (song: any) => {
      setCurrentAudioLink(song.audioLink)
      setSongImage(song.searchResult.snippet.thumbnails.high.url)
      setSongTitle(song.searchResult.snippet.title)
  }
  return (
    <div className='bg-black w-full overflow-y-scroll'>
        <Title className='text-white border-b border-b-gray-300 text-xl tracking-wider p-4 z-50 bg-black sticky top-0'>
            My PlayList
        </Title>

        <div className='flex flex-col gap-8 p-4'>
          {songs.map((song: any) => {
            return (
              <SongCard banner={song.searchResult.snippet.thumbnails.high.url} songName={song.searchResult.snippet.title} onClick={() => playAudio(song)} onDeleteClick={() => onDeleteSongClick(song.searchResult.id)} key={song.searchResult.id} />
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