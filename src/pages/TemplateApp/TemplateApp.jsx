import React from 'react'
import { Outlet } from 'react-router-dom'

export const TemplateApp = () => {
    return (
        <article className='  h-[100dvh] relative'>
            <img className=' object-cover w-full h-full' src="https://wallpapers.com/images/featured/imagenes-de-arquitectura-wy9bvfxk1vp3vxmz.jpg" alt="" />
            <div className=' w-full h-full bg-black/40 absolute top-0'></div>
            <section className='h-full w-full absolute top-0 grid place-items-center'>
                <Outlet/>
            </section>
        </article>
    )
}
