import Text from '@/utilities/Text'
import Title from '@/utilities/Title'
import Image from 'next/image'
import React from 'react'

interface MusicInfoModel{
    className?: string,
    banner?: any,
    title: string,
    singer: string
}

const MusicInfo: React.FC<MusicInfoModel> = ({className, banner, title, singer}) => {
  return (
    <div className={`${className}`}>
        <Image src={banner} alt="" className='md:w-[280px] md:h-[280px] rounded-full' />
        <Title className='text-[20px] py-4 font-bold'>
            {title}
        </Title>
        <Text className=''>
            {singer}
        </Text>
    </div>
  )
}

export default MusicInfo