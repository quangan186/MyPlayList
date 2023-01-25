import Title from '@/utilities/Title'
import React from 'react'
import SongCard from '../card/SongCard'

interface PlayListModel{
  songs: any[]
  setSongs: any
}

const PlayList: React.FC<PlayListModel> = ({songs, setSongs}) => {
  const onDeleteSongClick = (id: string) => {
    setSongs(songs.filter(song => id !== song.id))
  }

  return (
    <div className='bg-black w-full px-4 overflow-y-scroll  relative'>
        <Title className='text-white text-xl tracking-wider py-4 z-50 bg-black sticky top-0'>
            My PlayList
        </Title>

        <div className='flex flex-col gap-8 py-4'>
          {songs.map((song: any) => {
            return (
              <SongCard banner={song.snippet.thumbnails.high.url} songName={song.snippet.title} onDeleteClick={() => onDeleteSongClick(song.id)} />
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