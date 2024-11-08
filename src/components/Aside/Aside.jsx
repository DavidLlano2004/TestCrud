import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { paths } from '../../routes/paths';
import { resetUsersSlice } from '../../redux/slices/appSlice/AppSlice';
import { useSelector } from 'react-redux';

export const Aside = () => {
    const { auth: { rol } } = useSelector(state => state.persistedData)

    const { pathname } = useLocation();
    const navigate = useNavigate()

    return (
        <aside className=' bg-primary-principal rounded-tr-3xl rounded-br-3xl w-[20%] h-[100dvh] pt-20 pb-10 flex flex-col justify-between'>
            <div className='flex flex-col gap-8'>

                <button onClick={() => navigate(paths.PROFILE)} className={`text-black text-base font-bold ${pathname === '/home' ? "bg-primary-secondary" : "bg-transparent"}  py-3 px-2 flex gap-2 items-center w-[90%] rounded-tr-xl rounded-br-xl`}>
                    <svg className='w-[25px]' width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.249 4.75C12.249 5.74456 11.8539 6.69839 11.1507 7.40165C10.4474 8.10491 9.49356 8.5 8.499 8.5C7.50444 8.5 6.55061 8.10491 5.84735 7.40165C5.14409 6.69839 4.749 5.74456 4.749 4.75C4.749 3.75544 5.14409 2.80161 5.84735 2.09835C6.55061 1.39509 7.50444 1 8.499 1C9.49356 1 10.4474 1.39509 11.1507 2.09835C11.8539 2.80161 12.249 3.75544 12.249 4.75ZM1 18.868C1.03213 16.9004 1.83634 15.0242 3.23918 13.644C4.64202 12.2639 6.53109 11.4905 8.499 11.4905C10.4669 11.4905 12.356 12.2639 13.7588 13.644C15.1617 15.0242 15.9659 16.9004 15.998 18.868C13.6454 19.9468 11.0871 20.5035 8.499 20.5C5.823 20.5 3.283 19.916 1 18.868Z" stroke={`${pathname === '/home' ? '#201F24' : '#F8F5F0'}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <p className={`text-start font-semibold  ${pathname === '/home' ? " text-primary-principal" : "text-primary-secondary"}`}>Perfil</p>
                </button>
                {
                    rol === "Administrador" && (
                        <button onClick={() => navigate(paths.ADMIN)} className={`text-black text-base font-bold ${pathname === '/home' ? " bg-transparent" : "bg-primary-secondary"}  py-3 px-2 flex gap-2 items-center w-[90%] rounded-tr-xl rounded-br-xl`}>
                            <svg className='w-[25px]' width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.8078 12.771C16.2756 12.4515 16.8242 12.2711 17.3903 12.2504C17.9564 12.2298 18.5168 12.3699 19.0066 12.6544C19.4964 12.939 19.8956 13.3564 20.1581 13.8584C20.4206 14.3604 20.5356 14.9264 20.4898 15.491C19.2899 15.9103 18.0155 16.0735 16.7488 15.97C16.7449 14.8366 16.4185 13.7268 15.8078 12.772C15.2657 11.9218 14.5179 11.222 13.6336 10.7375C12.7493 10.253 11.7571 9.99932 10.7488 10C9.7406 9.99948 8.74859 10.2532 7.86449 10.7377C6.9804 11.2223 6.23277 11.9219 5.69076 12.772M16.7478 15.969L16.7488 16C16.7488 16.225 16.7368 16.447 16.7118 16.666C14.8971 17.7071 12.8409 18.2533 10.7488 18.25C8.57876 18.25 6.54176 17.674 4.78576 16.666C4.76006 16.4346 4.7477 16.2019 4.74876 15.969M4.74876 15.969C3.48239 16.0763 2.20867 15.9137 1.00976 15.492C0.964115 14.9276 1.07916 14.3617 1.34159 13.8599C1.60403 13.3581 2.00313 12.9408 2.49277 12.6563C2.9824 12.3718 3.54256 12.2317 4.10848 12.2521C4.67441 12.2726 5.22297 12.4528 5.69076 12.772M4.74876 15.969C4.75236 14.8357 5.08039 13.7269 5.69076 12.772M13.7488 4C13.7488 4.79565 13.4327 5.55871 12.8701 6.12132C12.3075 6.68393 11.5444 7 10.7488 7C9.95311 7 9.19005 6.68393 8.62744 6.12132C8.06483 5.55871 7.74876 4.79565 7.74876 4C7.74876 3.20435 8.06483 2.44129 8.62744 1.87868C9.19005 1.31607 9.95311 1 10.7488 1C11.5444 1 12.3075 1.31607 12.8701 1.87868C13.4327 2.44129 13.7488 3.20435 13.7488 4ZM19.7488 7C19.7488 7.29547 19.6906 7.58806 19.5775 7.86104C19.4644 8.13402 19.2987 8.38206 19.0898 8.59099C18.8808 8.79992 18.6328 8.96566 18.3598 9.07873C18.0868 9.1918 17.7942 9.25 17.4988 9.25C17.2033 9.25 16.9107 9.1918 16.6377 9.07873C16.3647 8.96566 16.1167 8.79992 15.9078 8.59099C15.6988 8.38206 15.5331 8.13402 15.42 7.86104C15.307 7.58806 15.2488 7.29547 15.2488 7C15.2488 6.40326 15.4858 5.83097 15.9078 5.40901C16.3297 4.98705 16.902 4.75 17.4988 4.75C18.0955 4.75 18.6678 4.98705 19.0898 5.40901C19.5117 5.83097 19.7488 6.40326 19.7488 7ZM6.24876 7C6.24876 7.29547 6.19057 7.58806 6.07749 7.86104C5.96442 8.13402 5.79869 8.38206 5.58975 8.59099C5.38082 8.79992 5.13278 8.96566 4.8598 9.07873C4.58682 9.1918 4.29424 9.25 3.99876 9.25C3.70329 9.25 3.41071 9.1918 3.13773 9.07873C2.86474 8.96566 2.61671 8.79992 2.40777 8.59099C2.19884 8.38206 2.03311 8.13402 1.92004 7.86104C1.80696 7.58806 1.74876 7.29547 1.74876 7C1.74876 6.40326 1.98582 5.83097 2.40777 5.40901C2.82973 4.98705 3.40203 4.75 3.99876 4.75C4.5955 4.75 5.1678 4.98705 5.58975 5.40901C6.01171 5.83097 6.24876 6.40326 6.24876 7Z" stroke={`${pathname === '/home' ? '#F8F5F0' : '#201F24'}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p className={`text-start font-semibold  ${pathname === '/home' ? "text-primary-secondary" : "text-primary-principal"}`}>Gestión de usuarios</p>
                        </button>
                    )
                }
            </div>
            <div className='flex justify-center'>
                <button onClick={() => { navigate(paths.LOGIN); resetUsersSlice() }} className='flex items-center gap-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#F8F5F0" className="size-6">
                        <path fillRule="evenodd" d="M16.5 3.75a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V15a.75.75 0 0 0-1.5 0v3.75a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3V9A.75.75 0 1 0 9 9V5.25a1.5 1.5 0 0 1 1.5-1.5h6ZM5.78 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06-1.06l-1.72-1.72H15a.75.75 0 0 0 0-1.5H4.06l1.72-1.72a.75.75 0 0 0 0-1.06Z" clipRule="evenodd" />
                    </svg>
                    <p className={`text-center font-semibold text-primary-secondary`}>Cerrar sesión</p>
                </button>
            </div>
        </aside>
    )
}
