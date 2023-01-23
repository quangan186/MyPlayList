import Text from '@/utilities/Text'
import Title from '@/utilities/Title'
import Image from 'next/image'
import React from 'react'

interface SearchResultModel{
    banner?: any,
    songName: string,
    singer: string,
}

const SearchResult: React.FC<SearchResultModel> = ({banner, songName, singer}) => {
  return (
    <div className='flex gap-4 cursor-pointer hover:opacity-70'>
        <Image src={banner} alt="" className='max-w-[60px] min-h-[60px]'/>
        <div className='w-full'>
            <Title className='text-white'>{songName}</Title>
            <Text className='text-white'>{singer}</Text>
        </div>
    </div>
  )
}

export default SearchResult