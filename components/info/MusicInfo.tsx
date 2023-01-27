import Text from "@/utilities/Text";
import Title from "@/utilities/Title";
import Image from "next/image";
import React from "react";
import defaultImg from "@/assets/img/defaultMusic.jpeg";

interface MusicInfoModel {
  className?: string;
  banner: string;
  title: string;
  singer: string;
}

const MusicInfo: React.FC<MusicInfoModel> = ({
  className,
  banner,
  title,
  singer,
}) => {
  return (
    <div className={`${className}`}>
      {banner ? (
        <img
          src={banner}
          alt=""
          className="md:w-[280px] md:h-[280px] mx-auto rounded-full animate-spin-slow"
        />
      ) : (
        <Image
          src={defaultImg}
          alt=""
          className="md:w-[280px] md:h-[280px] mx-auto rounded-full"
        />
      )}
      <Title className="text-[16px] py-4 font-bold">{title}</Title>
      <Text className="text-black text-[14px]">{singer}</Text>
    </div>
  );
};

export default MusicInfo;
