import Button from "@/utilities/Button";
import Title from "@/utilities/Title";
import Image from "next/image";
import React from "react";
import SongCard from "../card/SongCard";
import trash from "@/assets/svg/trash.svg"
import Text from "@/utilities/Text";

interface PlayListModel {
  songs: any[];
  setSongs: any;
  playAudioFromPlaylist: any;
  isFlipped: boolean
  onFlipDown: any
  setSuccess: any
  setError: any
  setIsNotificationClicked: any
}

const PlayList: React.FC<PlayListModel> = ({
  songs,
  setSongs,
  playAudioFromPlaylist,
  isFlipped,
  onFlipDown,
  setSuccess,
  setError,
  setIsNotificationClicked
}) => {

  const onDeleteSongClick = (id: string) => {
    const newSongs = songs.filter((song) => id !== song.searchResult.id);
    setSongs(newSongs);
    localStorage.setItem("songs", JSON.stringify(newSongs));
    setSuccess("Removed successful ^^")
    setError("")
    setIsNotificationClicked(false);
  };

  const onClearPlaylist = () => {
    if (confirm('Are you sure you want to delete the playlist?')) {   
      localStorage.removeItem("songs");
      setSuccess("Removed all successful ^^")
      setError("")
      setIsNotificationClicked(false);
    }
  }

  return (
    <div onClick={onFlipDown} className={`bg-black w-full h-screen  md:h-full ${isFlipped ? "translate-y-full": "translate-y-0"} md:translate-y-0 duration-300  md:rounded-lg md:flex flex-col shadow-lg md:static fixed top-0 left-0 z-50`}>
      <div className="flex items-center border-b border-b-gray-300 p-4 ">
        <Title className="text-white text-[20px] shadow-lg text-xl tracking-wider z-50 w-full">
          My Playlist
        </Title>

        <div className="w-full flex justify-end">
          <Button onClick={onClearPlaylist} className="text-white flex gap-2 bg-[#FF6464] justify-center py-4 px-2 rounded-lg w-[120px] hover:opacity-80 duration-200 items-center">
            <Image src={trash} alt="" className="w-[24px] h-[24px]"/>
            <Title className="text-right">
              Clear all
            </Title>
          </Button>
        </div>
        
      </div>
      

      <div className="flex flex-col p-4 max-h-[600px] h-full overflow-y-scroll border-b border-b-gray-300">
        {songs.map((song: any, index: number) => {
          return (
            <SongCard
              banner={song.searchResult.snippet.thumbnails.high.url}
              songName={song.searchResult.snippet.title}
              onClick={() => playAudioFromPlaylist(song)}
              onDeleteClick={() => onDeleteSongClick(song.searchResult.id)}
              key={index}
            />
          );
        })}
      </div>

      <div className="flex items-center md:hidden">
        <Text className="text-white p-4 mt-2">
          * For the one who bring confidence and motivation for me to work
        </Text>
      </div>
    </div>
  );
};

export default PlayList;
