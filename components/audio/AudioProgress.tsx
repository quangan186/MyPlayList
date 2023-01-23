import Text from '@/utilities/Text'
import React from 'react'
import ProgressBar from '../progressBar/ProgressBar'

interface AudioRangeModel{
    start: string,
    end: string,
    className?: string,
    progressBarRef: any,
    onChangeCurrentTime: any
}

const AudioRange: React.FC<AudioRangeModel> = ({className, start, end, progressBarRef, onChangeCurrentTime}) => {
  return (
    <div className={`${className} flex items-center gap-4 w-full`}>
        <Text className=''>{start}</Text>
        {/* <input type='range' className='w-full progressBar' /> */}
        <ProgressBar onChangeCurrentTime={onChangeCurrentTime} progressBarRef={progressBarRef}/>
        {/* <input type="range" defaultValue="0" /> */}
        <Text className='text-right'>{end}</Text>
    </div>
  )
}

export default AudioRange