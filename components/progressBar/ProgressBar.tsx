import React from 'react'

interface ProgressBarModel{
    progressBarRef: any,
    onChangeCurrentTime: any,
}

const ProgressBar: React.FC<ProgressBarModel> = ({progressBarRef, onChangeCurrentTime}) => {
  return (
    <div className='relative w-full flex items-center'>
        <input className='w-full' type='range' defaultValue='0'ref={progressBarRef} onChange={onChangeCurrentTime} />
    </div>
  )
}

export default ProgressBar