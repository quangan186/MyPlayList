import Button from '@/utilities/Button'
import Title from '@/utilities/Title'
import Image from 'next/image'
import React, { useState } from 'react'
import close from '@/assets/svg/close.svg'

interface NotificationModel{
  error?: string
  success?: string
  className?: string
  isNotificationClicked: boolean
  onCloseClick:any
}

const Notification: React.FC<NotificationModel> = ({isNotificationClicked, onCloseClick, error, success, className}) => {
  return (
    <div className={`${className} ${(error && !isNotificationClicked) || (success && !isNotificationClicked) ? "-translate-y-2" : 'translate-y-full'} left-0 duration-300 flex gap-2 items-center px-4 py-2 text-white rounded-lg`}>
      <Title className='font-bold'>
        {error || success}
      </Title>

      <Button className='w-[40px] h-[40px]' onClick={onCloseClick}>
        <Image src={close} alt="" />
      </Button>
    </div>
  )
}

export default Notification