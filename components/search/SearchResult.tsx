import Text from '@/utilities/Text'
import Title from '@/utilities/Title'
import Image from 'next/image'
import React from 'react'

interface SearchResultModel{
    banner?: any,
    songName: string,
    onClick?: React.MouseEventHandler<HTMLDivElement>
}

const SearchResult: React.FC<SearchResultModel> = ({banner, songName, onClick}) => {
  return (
    <div className='flex gap-4 cursor-pointer hover:opacity-70 h-[60px]' onClick={onClick}>
        {/* <Image src={banner} alt="" className='' width={60} height={60}/> */}
        <img src={banner} alt="" className='max-w-[60px] max-h-[60px]' />
        <div className='w-full'>
            <Title className='text-white'>{songName}</Title>
        </div>
    </div>
  )
}

export default SearchResult