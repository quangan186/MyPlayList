import Title from '@/utilities/Title'
import React from 'react'
import SongCard from '../card/SongCard'

interface PlayListModel{
  banner?: any
}

const PlayList: React.FC<PlayListModel> = ({banner}) => {
  return (
    <div className='bg-black w-full px-4 py-2 overflow-y-scroll'>
        <Title className='text-white text-xl tracking-wider py-2'>
            My PlayList
        </Title>

        <div className='flex flex-col gap-8  my-4'>
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
          <SongCard banner={banner} songName="Gira gira" />
          <SongCard banner={banner} songName="Gira gira" />
        </div>
    </div>
  )
}

export default PlayList