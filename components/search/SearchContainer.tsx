import React, { ChangeEventHandler } from 'react'
import SearchBar from './SearchBar'
import SearchResult from './SearchResult'

interface SearchBarModel{
  searchResult?: any
  onSearchClick?: React.MouseEventHandler<HTMLButtonElement>
  onChange?: ChangeEventHandler<HTMLInputElement>
  onSongClick?: React.MouseEventHandler<HTMLDivElement>
  onAddClick?: React.MouseEventHandler<HTMLButtonElement>
  setCurrentAudioLink: any
  setSongImage: any
  setSongTitle: any
  setSongs: any
  searchAudioLink: any
  handleOnClickPlayButton: any
  setCurrentTime: any
  progressBarRef: any
  setDuration: any
  audioRef: any
}

const SearchContainer: React.FC<SearchBarModel> = ({searchAudioLink, setSongs,searchResult , onSearchClick, onChange, setCurrentAudioLink, setSongImage,setSongTitle}) => {
  const playAudio = () => {
      setCurrentAudioLink(searchAudioLink)
      setSongImage(searchResult.snippet.thumbnails.high.url)
      setSongTitle(searchResult.snippet.title)
  }

  const onAddSongClick = () => {
    setSongs((prevSong: any) => [...prevSong, {
      searchResult: searchResult,
      audioLink: searchAudioLink
    }]) 
  }
  
  return (
    <div className='w-full flex flex-col'>
        <SearchBar onClick={onSearchClick} onChange={onChange}  />
        <div className={`bg-black w-full h-[60px] flex flex-col gap-4 p-4 mb-8 ${!searchResult ? "invisible" : ""}`}>
            {searchResult && <SearchResult banner={searchResult.snippet.thumbnails.high.url} songName={searchResult.snippet.title} onClick={() => playAudio()} onAddClick={() => onAddSongClick()}/>}
        </div>
    </div>
  )
}

export default SearchContainer