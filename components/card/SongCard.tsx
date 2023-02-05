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
    <div className="flex cursor-pointer h-[60px] relative py-8">
      <div onClick={onClick} className='flex items-center hover:opacity-70 w-full duration-200'>
        <img src={banner} alt="" className="max-w-[60px] max-h-[60px]" />
        <div className="w-full pl-4 pr-10">
          <Title className="text-white break-words">{songName}</Title>
        </div>
      </div>

      <Button className="hover:opacity-70 absolute top-1/2 right-0 -translate-y-1/2 duration-200" onClick={onDeleteClick}>
        <Image src={remove} alt="" className="max-h-[28px] max-w-[28px]" />
      </Button>
    </div>
  );
};

export default SongCard;
