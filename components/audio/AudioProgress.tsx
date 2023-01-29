import Text from '@/utilities/Text'
import React from 'react'
import ProgressBar from '../progressBar/ProgressBar'

interface AudioRangeModel{
    start: string,
    end: string,
    className?: string,
    onChange: any
    percentage: number
    rangeRef: any 
    thumbRef: any 
    setPosition: any 
    setMarginLeft: any 
    setProgressBarWidth: any
    position: any
    progressBarWidth: any
    marginLeft: any
}

const AudioRange: React.FC<AudioRangeModel> = ({rangeRef, thumbRef, setPosition, setMarginLeft, setProgressBarWidth, position, progressBarWidth, marginLeft, percentage, className, start, end, onChange}) => {
  return (
    <div className={`${className} flex items-center gap-4 w-full`}>
        <Text className=''>{start}</Text>
        {/* <input type='range' className='w-full progressBar' /> */}
        <ProgressBar  rangeRef={rangeRef} thumbRef={thumbRef} setPosition={setPosition} setMarginLeft={setMarginLeft} setProgressBarWidth={setProgressBarWidth} position={position} progressBarWidth={progressBarWidth} marginLeft={marginLeft} percentage={percentage} onChange={onChange}/>
        {/* <input type="range" defaultValue="0" /> */}
        <Text className='text-right'>{end}</Text>
    </div>
  )
}

export default AudioRange