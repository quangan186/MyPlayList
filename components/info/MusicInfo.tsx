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
        <Image src={banner} alt="" className='w-[15vw] h-[30vh] rounded-full' />
        <Title className=''>
            {title}
        </Title>
        <Text className=''>
            {singer}
        </Text>
    </div>
  )
}

export default MusicInfo