import Button from '@/utilities/Button'
import React, { ChangeEventHandler } from 'react'

interface SearchBarModel{
  onChange?: ChangeEventHandler<HTMLInputElement>
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}
const SearchBar: React.FC<SearchBarModel> = ({onChange, onClick}) => {
  return (
    <div className='flex w-full gap-4 '>
        <input type='text' className='w-full px-4 py-2' placeholder='Copy and paste the Youtube link here' onChange={onChange}/>
        <Button type='submit' onClick={onClick} className='flex justify-center items-center p-4 bg-blue-400'>
            Search
        </Button>
    </div>
  )
}

export default SearchBar