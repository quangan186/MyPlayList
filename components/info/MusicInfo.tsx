import Title from "@/utilities/Title";
import Image from "next/image";
import React from "react";
import defaultImg from "@/assets/img/defaultMusic.jpeg";
import Button from "@/utilities/Button";
import playlist from "@/assets/svg/playlist.svg"

interface MusicInfoModel {
  className?: string;
  banner: string;
  title: string;
  togglePlayButton: boolean
  onShowPlaylist: any
}

const MusicInfo: React.FC<MusicInfoModel> = ({
  togglePlayButton,
  className,
  banner,
  title,
  onShowPlaylist
}) => {
  return (
    <div className={`${className} w-full h-full flex flex-col`}>
      <div className="h-full">
        {banner ? (
          <img
            src={banner}
            alt=""
            className={`mx-auto sm:w-[260px] sm:h-[260px] w-[200px] h-[200px] object-cover rounded-full ${togglePlayButton ? "animate-spin-slow" : ""}`}
          />
        ) : (
          <Image
            src={defaultImg}
            alt=""
            className="mx-auto sm:w-[260px] sm:h-[260px] w-[200px] h-[200px] object-cover rounded-full"
          />
        )}
      </div>
      
      <div className="flex h-full justify-between items-center gap-4 md:py-4 py-8">
        <Title className="text-[16px] font-bold text-left w-full">{title}</Title>
        <Button className="max-w-[20px] max-h-[20px] md:hidden pointer-events-auto" onClick={onShowPlaylist}>
          <Image src={playlist} alt="" />
        </Button>
      </div>
    </div>
  );
};

export default MusicInfo;
