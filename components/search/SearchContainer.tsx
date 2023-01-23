import React from 'react'
import SearchBar from './SearchBar'
import SearchResult from './SearchResult'
import defaultImg from '@/assets/img/defaultMusic.jpeg'

const SearchContainer: React.FC = ({}) => {
  return (
    <div className='w-full flex flex-col '>
        <SearchBar />
        <div className='bg-black w-full h-full opacity-70 overflow-y-scroll flex flex-col gap-4 py-4 px-4'>
            <SearchResult banner={defaultImg} songName='Gira gira' singer='Ado' />
            <SearchResult banner={defaultImg} songName='Gira gira' singer='Ado' />
            <SearchResult banner={defaultImg} songName='Gira gira' singer='Ado' />
            <SearchResult banner={defaultImg} songName='Gira gira' singer='Ado' />
            <SearchResult banner={defaultImg} songName='Gira gira' singer='Ado' />
            <SearchResult banner={defaultImg} songName='Gira gira' singer='Ado' />
            <SearchResult banner={defaultImg} songName='Gira gira' singer='Ado' />
            <SearchResult banner={defaultImg} songName='Gira gira' singer='Ado' />
            <SearchResult banner={defaultImg} songName='Gira gira' singer='Ado' />
            <SearchResult banner={defaultImg} songName='Gira gira' singer='Ado' />
        </div>
    </div>
  )
}

export default SearchContainer