import React from 'react'
import { Icons } from '../../../assets/Icons/IconProvider'
import { useSelector } from 'react-redux'
const { IconDefaultUser } = Icons

export const Profile = () => {
  const { auth: { email , name , rol , user } } = useSelector(state => state.persistedData)
  
  return (
    <article>
      <section className=' w-full h-[150px]'>
        <img className=' object-cover w-full h-full' src="https://wallpapers.com/images/featured/imagenes-de-arquitectura-wy9bvfxk1vp3vxmz.jpg" alt="" />
      </section>
      <section className='flex justify-center'>
        <div className="bg-slate-500 rounded-full w-[100px] h-[100px] -translate-y-12 overflow-hidden">
          <img className='w-full h-full object-cover' src={IconDefaultUser} alt="" />
        </div>
      </section>
      <div className='relative'>

        <h1 className='text-center font-semibold text-lg text-primary-principal -translate-y-8'>{name}</h1>
      </div>
      <section className=' mt-10 w-[50%] ml-20 grid grid-cols-2 gap-5'>
        <div>
          <h1 className='font-bold text-lg text-primary-principal'>Rol</h1>
          <p className='font-normal text-lg text-primary-principal'>{rol}</p>
        </div>
        <div>

          <h1 className='font-bold text-lg text-primary-principal'>Nombre</h1>
          <p className='font-normal text-lg text-primary-principal'>{name}</p>
        </div>
        <div>
          <h1 className='font-bold text-lg text-primary-principal'>Usuario</h1>
          <p className='font-normal text-lg text-primary-principal'>{user}</p>
        </div>
        <div>
          <h1 className='font-bold text-lg text-primary-principal'>Correo</h1>
          <p className='font-normal text-lg text-primary-principal'>{email}</p>
        </div>
      </section>
    </article>
  )
}
