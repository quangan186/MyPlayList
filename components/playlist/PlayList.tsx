import Title from '@/utilities/Title'
import React from 'react'
import SearchResult from '../search/SearchResult'

const PlayList: React.FC = ({}) => {
  return (
    <div className='bg-black w-full px-4 py-2 '>
        <Title className='text-white text-xl tracking-wider'>
            My PlayList
        </Title>

        <SearchResult banner songName="Gira gira" />
    </div>
  )
}

export default PlayList