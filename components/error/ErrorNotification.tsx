import Button from '@/utilities/Button'
import Title from '@/utilities/Title'
import Image from 'next/image'
import React, { useState } from 'react'
import close from '@/assets/svg/close.svg'

interface ErrorNotificationModel{
  error: string
  className?: string
  isErrorClicked: boolean
  onCloseClick:any
}

const ErrorNotification: React.FC<ErrorNotificationModel> = ({isErrorClicked, onCloseClick, error, className}) => {
  return (
    <div className={`${className} ${error && !isErrorClicked ? "-translate-y-0" : 'translate-y-full'} left-0 duration-300 flex gap-2 items-center px-4 py-2 text-white`}>
      <Title className='font-bold'>
        {error}
      </Title>

      <Button className='w-[40px] h-[40px]' onClick={onCloseClick}>
        <Image src={close} alt="" />
      </Button>
    </div>
  )
}

export default ErrorNotification