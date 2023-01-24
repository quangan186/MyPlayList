import Text from '@/utilities/Text'
import Title from '@/utilities/Title'
import Image from 'next/image'
import React from 'react'

interface SearchResultModel{
    banner?: any,
    songName: string,
}

const SearchResult: React.FC<SearchResultModel> = ({banner, songName}) => {
  return (
    <div className='flex gap-4 cursor-pointer hover:opacity-70'>
        <Image src={banner} alt="" className='max-w-[60px] min-h-[60px]'/>
        <div className='w-full'>
            <Title className='text-white'>{songName}</Title>
        </div>
    </div>
  )
}

export default SearchResult