import Image from 'next/image'
import React from 'react'
import loop from '@/assets/svg/loop.svg'
import random from '@/assets/svg/random.svg'
import Button from '@/utilities/Button'

const RandomLoopButton = () => {
  return (
    <div className='inline-flex w-full gap-4'>
        <Button className=''>
            <Image src={random} alt="" className='w-[20px] h-[20px]' />
        </Button>

        <Button className=''>
            <Image src={loop} alt="" className='w-[20px] h-[20px]'/>
        </Button>
    </div>
  )
}

export default RandomLoopButton