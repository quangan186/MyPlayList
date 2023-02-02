import Button from "@/utilities/Button";
import Text from "@/utilities/Text";
import Title from "@/utilities/Title";
import Image from "next/image";
import React from "react";
import add from "@/assets/svg/add.svg";

interface SearchResultModel {
  banner?: any;
  songName: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onAddClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const SearchResult: React.FC<SearchResultModel> = ({
  banner,
  songName,
  onClick,
  onAddClick
}) => {
  return (
    <div
      className="flex gap-4 cursor-pointer h-full items-center"
    >
      <div className="hover:opacity-70 gap-4 flex items-center w-full" onClick={onClick}>
        <img src={banner} alt="" className="max-w-[60px] max-h-[60px]" />
        <div className="w-full">
          <Title className="text-white">{songName}</Title>
        </div>
      </div>
      
      <Button className="hover:opacity-70" onClick={onAddClick}>
        <Image src={add} alt="" className="max-h-[28px] max-w-[28px]" />
      </Button>
    </div>
  );
};

export default SearchResult;
