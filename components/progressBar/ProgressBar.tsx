import React from 'react'

interface ProgressBarModel{
    progressBarRef: any,
    onChangeCurrentTime: any,
}

const ProgressBar: React.FC<ProgressBarModel> = ({progressBarRef, onChangeCurrentTime}) => {
  return (
    <div className='relative'>
        <input type='range' defaultValue='0'ref={progressBarRef} onChange={onChangeCurrentTime} />
    </div>
  )
}

export default ProgressBar