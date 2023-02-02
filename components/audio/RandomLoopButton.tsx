import Image from 'next/image'
import React from 'react'

import random from '@/assets/svg/random.svg'
import Button from '@/utilities/Button'

interface RandomLoopButtonModel{
  loopFunc: any
  randomFunc: any
}
const RandomLoopButton: React.FC<RandomLoopButtonModel> = ({loopFunc, randomFunc}) => {
  return (
    <div className='inline-flex w-full gap-4'>
        <Button className='' onClick={randomFunc}>
            <Image src={random} alt="" className='w-[20px] h-[20px]' />
        </Button>

        
    </div>
  )
}

export default RandomLoopButton