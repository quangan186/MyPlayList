import Button from '@/utilities/Button'
import Image from 'next/image'
import React, { ChangeEventHandler } from 'react'
import search from '@/assets/svg/search.svg'
interface SearchBarModel{
  onChange?: ChangeEventHandler<HTMLInputElement>
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}
const SearchBar: React.FC<SearchBarModel> = ({onChange, onClick}) => {
  return (
    <div className='flex w-full relative bg-[#EEEEEE] h-[60px] items-center rounded-lg'>
        <input type='text' className='w-full px-6 py-2 border-none outline-none bg-transparent rounded-full' placeholder='Copy and paste the Youtube link here' onChange={onChange}/>
        <Button type='submit' onClick={onClick} className='flex justify-center items-center max-w-[40px] mr-4 max-h-[40px]'>
            <Image src={search} alt="" className='' />
        </Button>
    </div>
  )
}

export default SearchBar