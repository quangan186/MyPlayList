import Text from "@/utilities/Text";
import Title from "@/utilities/Title";
import Image from "next/image";
import React from "react";
import defaultImg from "@/assets/img/defaultMusic.jpeg";

interface MusicInfoModel {
  className?: string;
  banner: string;
  title: string;
}

const MusicInfo: React.FC<MusicInfoModel> = ({
  className,
  banner,
  title,
}) => {
  return (
    <div className={`${className} w-full h-full flex flex-col`}>
      <div className="h-full">
        {banner ? (
          <img
            src={banner}
            alt=""
            className={`object-cover md:h-[240px] mx-auto rounded-lg`}
          />
        ) : (
          <Image
            src={defaultImg}
            alt=""
            className="md:h-[240px] mx-auto rounded-lg"
          />
        )}
      </div>
      
      <Title className="text-[16px] py-4 font-bold h-full flex items-center">{title}</Title>
    </div>
  );
};

export default MusicInfo;
