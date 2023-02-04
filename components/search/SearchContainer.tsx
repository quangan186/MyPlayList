import React, { ChangeEventHandler } from "react";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";

interface SearchBarModel {
  searchResult?: any;
  onSearchClick?: React.MouseEventHandler<HTMLButtonElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onSongClick?: React.MouseEventHandler<HTMLDivElement>;
  onAddClick?: React.MouseEventHandler<HTMLButtonElement>;
  setCurrentAudioLink: any;
  setSongImage: any;
  setSongTitle: any;
  setSongs: any;
  searchAudioLink: any;
  handleOnClickPlayButton: any;
  setCurrentTime: any;
  progressBarRef: any;
  setDuration: any;
  audioRef: any;
  setPosition: any;
  setMarginLeft: any;
  setProgressBarWidth: any;
  setPercentage: any;
  songs: any[]
}

const SearchContainer: React.FC<SearchBarModel> = ({
  setCurrentTime,
  setDuration,
  setPercentage,
  setPosition,
  setMarginLeft,
  setProgressBarWidth,
  searchAudioLink,
  setSongs,
  searchResult,
  onSearchClick,
  onChange,
  setCurrentAudioLink,
  setSongImage,
  setSongTitle,
  songs
}) => {
  const playAudio = () => {
    setCurrentTime(0);
    setDuration(NaN);
    setPosition(0);
    setMarginLeft(0);
    setProgressBarWidth(0);
    setPercentage(0);
    setCurrentAudioLink(searchAudioLink);
    setSongImage(searchResult.snippet.thumbnails.high.url);
    setSongTitle(searchResult.snippet.title);
  };

  const onAddSongClick = () => {
    const songAdded = {
      searchResult: searchResult,
      audioLink: searchAudioLink,
    }
    if (songs.filter(song => song.searchResult.id === songAdded.searchResult.id).length > 0){

      alert("Song has been added already")
    } else{
      setSongs((prevSong: any) => [
        ...prevSong, songAdded
      ]);
      
      var songStorage = [...songs, {
        searchResult: searchResult,
        audioLink: searchAudioLink,
      }]
  
      localStorage.setItem("songs", JSON.stringify(songStorage))
    }
  };

  return (
    <div className="w-full flex flex-col">
      <SearchBar onClick={onSearchClick} onChange={onChange} />
      <div
        className={`bg-black w-full h-[60px] flex flex-col gap-4 p-4 mb-8 ${
          !searchResult ? "invisible" : ""
        }`}
      >
        {searchResult && (
          <SearchResult
            banner={searchResult.snippet.thumbnails.high.url}
            songName={searchResult.snippet.title}
            onClick={() => playAudio()}
            onAddClick={() => onAddSongClick()}
          />
        )}
      </div>
    </div>
  );
};

export default SearchContainer;
