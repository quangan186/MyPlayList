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
  setChannel: any
  setSongImage: any
  setSongTitle: any
}

const SearchContainer: React.FC<SearchBarModel> = ({searchResult , onSearchClick, onChange, onAddClick, setCurrentAudioLink, setChannel, setSongImage,setSongTitle}) => {
  const playAudio = (id: string) => {
    const  getMp3Link = async() =>{
      const fetchApi = await fetch(`https://youtube-mp36.p.rapidapi.com/dl?id=${id}`, {
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
      setChannel(searchResult.snippet.channelTitle)
      setSongImage(searchResult.snippet.thumbnails.high.url)
      setSongTitle(searchResult.snippet.title)

    }
    getMp3Link()
  }
  return (
    <div className='w-full flex flex-col'>
        <SearchBar onClick={onSearchClick} onChange={onChange}  />
        <div className={`bg-black w-full h-full flex flex-col gap-4 p-4 mb-8 ${!searchResult ? "invisible" : ""}`}>
            {searchResult && <SearchResult banner={searchResult.snippet.thumbnails.high.url} songName={searchResult.snippet.title} onClick={() => playAudio(searchResult.id)} onAddClick={onAddClick}/>}
        </div>
    </div>
  )
}

export default SearchContainer