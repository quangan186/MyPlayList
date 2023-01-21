import Button from "@/utilities/Button";
import Image from "next/image";
import React from "react";
import play from "@/assets/svg/play.svg";
import next from "@/assets/svg/next.svg";
import previous from "@/assets/svg/previous.svg";

const AudioButtonBar: React.FC = ({}) => {
  return (
    <div className="bg-white flex justify-center">
      <div className="flex gap-4 items-center">
        <Button className="">
          <Image
            src={previous}
            alt="previous"
            className={`w-[20px] h-[20px]`}
          />
        </Button>

        <Button className="flex items-center">
          <Image src={play} alt="play" className={`w-[40px] h-[40px]`} />
        </Button>

        <Button>
          <Image src={next} alt="next" className={`w-[20px] h-[20px]`} />
        </Button>
      </div>
    </div>
  );
};

export default AudioButtonBar;
