import React from 'react'
import { Outlet } from 'react-router-dom'

export const TemplateUsers = () => {
  return (
    <div className='w-full h-full p-6'>
      <Outlet />
    </div>
  )
}
