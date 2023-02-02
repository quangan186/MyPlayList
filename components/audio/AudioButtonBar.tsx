import Button from "@/utilities/Button";
import Image from "next/image";
import React from "react";
import play from "@/assets/svg/play.svg";
import next from "@/assets/svg/next.svg";
import previous from "@/assets/svg/previous.svg";
import pause from '@/assets/svg/pause.svg'
import loop from '@/assets/svg/loop.svg'
import loopOnce from '@/assets/svg/loopOnce.svg'
import activeLoop from '@/assets/svg/activeLoop.svg'

interface AudioButtonModel{
  prevFunc?: React.MouseEventHandler<HTMLButtonElement>,
  playFunc?: React.MouseEventHandler<HTMLButtonElement>,
  nextFunc?: React.MouseEventHandler<HTMLButtonElement>,
  togglePlayButton: boolean
  volumeMute: boolean
  handleMuteClick: any
  setVolumeLevel: any
  volumeLevel: number
  loopFunc: any
  randomFunc: any
  isLooped: boolean
  handleLoopOnceButton: any
}

const AudioButtonBar: React.FC<AudioButtonModel> = ({handleLoopOnceButton, loopFunc, isLooped, prevFunc, playFunc, nextFunc, togglePlayButton}) => {
  return (
    <div className="flex justify-between items-center">
      <Button className='w-full' onClick={loopFunc}>
        <Image src={isLooped ? activeLoop : loop} alt="" className='w-[20px] h-[20px]'/>
      </Button>

      <div className="flex w-full justify-center gap-4 items-center">
        <Button className="" onClick={prevFunc}>
          <Image
            src={previous}
            alt="previous"
            className={`w-[20px] h-[20px]`}
          />
        </Button>

        <Button className="flex items-center" onClick={playFunc}>
          <Image src={togglePlayButton ? pause : play} alt="play" className={`w-[40px] h-[40px]`} />
        </Button>

        <Button className="" onClick={nextFunc}>
          <Image src={next} alt="next" className={`w-[20px] h-[20px]`} />
        </Button>
      </div>

      <Button className='w-full flex justify-end' onClick={handleLoopOnceButton}>
        <Image src={loopOnce} alt="" className='w-[20px] h-[20px]'/>
      </Button>
    </div>
  );
};

export default AudioButtonBar;
