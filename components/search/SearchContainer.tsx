import React, { ChangeEventHandler } from 'react'
import SearchBar from './SearchBar'
import SearchResult from './SearchResult'
import defaultImg from '@/assets/img/defaultMusic.jpeg'

interface SearchBarModel{
  searchResult?: any
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  onChange?: ChangeEventHandler<HTMLInputElement>
}

const SearchContainer: React.FC<SearchBarModel> = ({searchResult , onClick, onChange}) => {
  return (
    <div className='w-full flex flex-col '>
        <SearchBar onClick={onClick} onChange={onChange}  />
        <div className='bg-black w-full h-full opacity-70 overflow-y-scroll flex flex-col gap-4 py-4 px-4'>
            {searchResult && <SearchResult banner={defaultImg} songName={searchResult.title} />}
        </div>
    </div>
  )
}

export default SearchContainer