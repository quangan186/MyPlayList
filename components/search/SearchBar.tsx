import Button from '@/utilities/Button'
import React from 'react'

const SearchBar: React.FC = () => {
  return (
    <div className='flex w-full gap-4 bg-black '>
        <input type='text' className='w-full px-4 py-2' placeholder='Copy and paste the Youtube link here'/>
        <Button className='flex justify-center items-center p-4 bg-blue-400'>
            Search
        </Button>
    </div>
  )
}

export default SearchBar