import React from 'react'
import { ButtonTypeA } from '../../../components/molecules/buttons/ButtonTypeA'
import { useNavigate } from 'react-router-dom'
import { paths } from '../../../routes/paths'

export const Profile = () => {
  const navigate = useNavigate()
  return (
    <article>
      <section className=' w-full h-[150px]'>
        <img className=' object-cover w-full h-full' src="https://wallpapers.com/images/featured/imagenes-de-arquitectura-wy9bvfxk1vp3vxmz.jpg" alt="" />
      </section>
      <section className='flex justify-center'>
        <div className="bg-slate-500 rounded-full w-[100px] h-[100px] -translate-y-12">
          <img src="" alt="" />
        </div>
      </section>
      <h1 className='text-center font-semibold text-lg text-primary-principal -translate-y-8'>Julian rodriguez</h1>
      <section className=' mt-10 w-[50%] ml-20 grid grid-cols-2 gap-5'>
        <div>
          <h1 className='font-bold text-lg text-primary-principal'>Dirección</h1>
          <p className='font-normal text-lg text-primary-principal'>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className='flex gap-10'>
          <div>

            <h1 className='font-bold text-lg text-primary-principal'>Nombre</h1>
            <p className='font-normal text-lg text-primary-principal'>Julian</p>
          </div>
          <div>

            <h1 className='font-bold text-lg text-primary-principal'>Apellido</h1>
            <p className='font-normal text-lg text-primary-principal'>Rodriguez</p>
          </div>
        </div>
        <div>
          <h1 className='font-bold text-lg text-primary-principal'>Usuario</h1>
          <p className='font-normal text-lg text-primary-principal'>Lorem ipsum dolor sit amet.</p>
        </div>
        <div>
          <h1 className='font-bold text-lg text-primary-principal'>Correo</h1>
          <p className='font-normal text-lg text-primary-principal'>Lorem ipsum dolor sit amet.</p>
        </div>
      </section>
      <div className='w-[20%] ml-20 mt-20'>
        <ButtonTypeA
          idButton={"btnGoUsers"}
          text="Gestión de usuarios"
          bgColor="#201F24"
          txColor="#F8F5F0"
          bdWidth="0px"
          bgHvColor="#35333b"
          width='w-full'
          alternativeStyle='mt-5'
          action={() => navigate(paths.ADMIN)}
          submitBtn={false}
        />

      </div>
    </article>
  )
}
