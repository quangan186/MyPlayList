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
}

const SearchResult: React.FC<SearchResultModel> = ({
  banner,
  songName,
  onClick,
}) => {
  return (
    <div
      className="flex gap-4 cursor-pointer h-[40px] items-center"
      onClick={onClick}
    >
      <div className="hover:opacity-70 flex items-center w-full">
        <img src={banner} alt="" className="max-w-[60px] max-h-[60px]" />
        <div className="w-full">
          <Title className="text-white">{songName}</Title>
        </div>
      </div>

      <Button className="hover:opacity-70">
        <Image src={add} alt="" className="max-h-[40px] max-w-[40px]" />
      </Button>
    </div>
  );
};

export default SearchResult;
