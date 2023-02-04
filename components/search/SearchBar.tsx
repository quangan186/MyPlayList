import Button from '@/utilities/Button'
import Image from 'next/image'
import React, { ChangeEventHandler } from 'react'
import search from '@/assets/svg/search.svg'
interface SearchBarModel{
  setYoutubeLink: any
  onHandleSubmit?: any
  searchRef: any
  searchMp3:any
}
const SearchBar: React.FC<SearchBarModel> = ({searchMp3, searchRef, onHandleSubmit}) => {
  return (
    <form onSubmit={onHandleSubmit} className='flex w-full relative items-center rounded-lg z-50'>
        <input ref={searchRef} type='text' className='relative w-full px-6 py-4 border-none outline-none bg-transparent rounded-lg bg-white' placeholder='Copy and paste the Youtube link here' onKeyDown={(e) => {
          if (e.key === "Enter"){
            searchMp3(e.currentTarget.value)
          }
        }} name="youtubeLink"/>
        <Button type='submit' className='flex justify-center items-center max-w-[40px] mr-4 max-h-[40px] absolute right-0'>
            <Image src={search} alt="" className='' />
        </Button>
    </form>
  )
}

export default SearchBar