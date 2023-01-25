import Button from "@/utilities/Button";
import Title from "@/utilities/Title";
import Image from "next/image";
import React from "react";
import remove from "@/assets/svg/remove.svg";

interface SearchResultModel {
  banner?: any;
  songName: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onDeleteClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const SongCard: React.FC<SearchResultModel> = ({
  banner,
  songName,
  onClick,
  onDeleteClick
}) => {
  return (
    <div className="flex gap-4 cursor-pointer h-[60px] relative">
      <div onClick={onClick} className='flex items-center gap-4 hover:opacity-70 w-full'>
        <img src={banner} alt="" className="max-w-[60px] max-h-[60px]" />
        <div className="w-full">
          <Title className="text-white">{songName}</Title>
        </div>
      </div>

      <Button className="hover:opacity-70" onClick={onDeleteClick}>
        <Image src={remove} alt="" className="max-h-[40px] max-w-[40px]" />
      </Button>
    </div>
  );
};

export default SongCard;
