import React from 'react'
import { Header } from '../../components/Header/Header'
import { Aside } from '../../components/Aside/Aside'
import { Outlet } from 'react-router-dom'

export const TemplateHomeApp = () => {
    return (
        <div className='flex w-full'>
            <Aside />
            <div className="w-full overflow-x-hidden flex flex-col">
                <Header />
                <div className=" bg-primary-secondary h-[94dvh]  overflow-x-hidden">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}
