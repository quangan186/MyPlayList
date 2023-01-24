import React, { ChangeEventHandler } from 'react'
import SearchBar from './SearchBar'
import SearchResult from './SearchResult'

interface SearchBarModel{
  searchResult?: any
  onSearchClick?: React.MouseEventHandler<HTMLButtonElement>
  onChange?: ChangeEventHandler<HTMLInputElement>
  onSongClick?: React.MouseEventHandler<HTMLDivElement>
}

const SearchContainer: React.FC<SearchBarModel> = ({searchResult , onSearchClick, onSongClick, onChange}) => {
  return (
    <div className='w-full flex flex-col '>
        <SearchBar onClick={onSearchClick} onChange={onChange}  />
        <div className={`bg-black w-full h-full opacity-70 flex flex-col gap-4 py-4 px-4 ${!searchResult ? "invisible" : ""}`}>
            {searchResult && <SearchResult banner={searchResult.thumbnails.high.url} songName={searchResult.title} onClick={onSongClick}/>}
        </div>
    </div>
  )
}

export default SearchContainer