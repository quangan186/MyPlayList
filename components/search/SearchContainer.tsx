import React, { ChangeEventHandler } from "react";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";

interface SearchBarModel {
  searchResult?: any;
  onHandleSubmit: any
  setYoutubeLink: any
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
  setError: any
  searchRef: any
  searchMp3: any
  setSuccess: any
  setIsNotificationClicked: any
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
  onHandleSubmit,
  setYoutubeLink,
  setCurrentAudioLink,
  setSongImage,
  setSongTitle,
  songs,
  setError,
  searchRef,
  searchMp3,
  setSuccess,
  setIsNotificationClicked
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
      setError("Song has been added already!")
      setSuccess("")
      setIsNotificationClicked(false);
    } else{
      setSuccess("Added successful ^^")
      setError("")
      setIsNotificationClicked(false);
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
    <div className="w-full h-full flex flex-col">
      <SearchBar searchMp3={searchMp3} searchRef={searchRef} onHandleSubmit={onHandleSubmit} setYoutubeLink={setYoutubeLink} />
      <div
        className={`bg-black w-full min-h-[60px] my-4 rounded-lg flex flex-col justify-center gap-4 p-4 duration-300 ${
          !searchResult ? "-translate-y-full invisible" : "translate-y-0 visible"
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
