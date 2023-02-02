import Title from "@/utilities/Title";
import React, { useEffect } from "react";
import SongCard from "../card/SongCard";

interface PlayListModel {
  songs: any[];
  setSongs: any;
  playAudioFromPlaylist: any;
}

const PlayList: React.FC<PlayListModel> = ({
  songs,
  setSongs,
  playAudioFromPlaylist,
}) => {
  const onDeleteSongClick = (id: string) => {
    const newSongs = songs.filter((song) => id !== song.searchResult.id);
    setSongs(newSongs);
    localStorage.setItem("songs", JSON.stringify(newSongs));
  };

  return (
    <div className="bg-black w-full overflow-y-scroll">
      <Title className="text-white border-b border-b-gray-300 text-xl tracking-wider p-4 z-50 bg-black sticky top-0">
        My Playlist
      </Title>

      <div className="flex flex-col gap-8 p-4">
        {songs.map((song: any, index: number) => {
          return (
            <SongCard
              banner={song.searchResult.snippet.thumbnails.maxres.url}
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
