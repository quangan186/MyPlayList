import Button from '@/utilities/Button'
import Image from 'next/image'
import React from 'react'
import play from '@/assets/svg/play.svg'
import next from '@/assets/svg/next.svg'
import previous from '@/assets/svg/previous.svg'

const AudioButtonBar:React.FC = ({}) => {
  return (
    <div className='bg-white flex'>
        <Button>
            <Image src={previous} alt="previous" className={`w-[40px] h-[40px]`} />   
        </Button>

        <Button>
          <Image src={play} alt="play" className={`w-[40px] h-[40px]`} />
        </Button>

        <Button>
          <Image src={next} alt="next" className={`w-[40px] h-[40px]`} />
        </Button>
    </div>
  )
}

export default AudioButtonBar