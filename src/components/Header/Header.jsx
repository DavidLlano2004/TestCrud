import React from 'react'
import { Icons } from '../../assets/Icons/IconProvider'
import { useSelector } from 'react-redux'
const { IconProfileHeader } = Icons

export const Header = () => {
  const { auth: {  user } } = useSelector(state => state.persistedData)

    return (
        <header className='bg-white w-full h-[50px] flex items-center justify-end'>
            <figure className='flex gap-2 mr-8'>
                <img src={IconProfileHeader} alt="IconProfileHeader" />
                <p className='text-primary-principal'>{user}</p>
            </figure>
        </header>
    )
}
