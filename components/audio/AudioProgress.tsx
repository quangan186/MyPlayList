import Text from '@/utilities/Text'
import React from 'react'

interface AudioRangeModel{
    start: string,
    end: string,
    className?: string
}

const AudioRange: React.FC<AudioRangeModel> = ({className, start, end}) => {
  return (
    <div className={`${className} flex w-full gap-4`}>
        <Text>{start}</Text>
        <input type='range' className='w-full' />
        <Text>{end}</Text>
    </div>
  )
}

export default AudioRange