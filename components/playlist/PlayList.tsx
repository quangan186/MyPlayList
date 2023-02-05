import Button from "@/utilities/Button";
import Title from "@/utilities/Title";
import Image from "next/image";
import React, { useState } from "react";
import SongCard from "../card/SongCard";
import trash from "@/assets/svg/trash.svg"

interface PlayListModel {
  songs: any[];
  setSongs: any;
  playAudioFromPlaylist: any;
  isFlipped: boolean
  onFlipDown: any
}

const PlayList: React.FC<PlayListModel> = ({
  songs,
  setSongs,
  playAudioFromPlaylist,
  isFlipped,
  onFlipDown
}) => {

  const onDeleteSongClick = (id: string) => {
    const newSongs = songs.filter((song) => id !== song.searchResult.id);
    setSongs(newSongs);
    localStorage.setItem("songs", JSON.stringify(newSongs));
  };

  const onClearPlaylist = () => {
    if (confirm('Are you sure you want to delete the playlist?')) {   
      localStorage.removeItem("songs");
    }
  }

  return (
    <div onDrag={onFlipDown} className={`bg-black w-full h-full ${isFlipped ? "translate-y-full": "translate-y-0"} md:translate-y-0 duration-300  md:rounded-lg md:flex flex-col shadow-lg md:static absolute top-0 left-0 z-50`}>
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
      

      <div className="flex flex-col gap-8 p-4 overflow-y-scroll my-playlist h-full rounded-lg">
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
    </div>
  );
};

export default PlayList;
