import React from 'react'
import { ButtonTypeA } from '../../molecules/buttons/ButtonTypeA'
import { Icons } from '../../../assets/Icons/IconProvider'
import { useNavigate } from 'react-router-dom'
import { paths } from '../../../routes/paths'
const { IconEdit, IconDelete } = Icons

export const TableUsers = () => {
    const navigate = useNavigate()
    return (
        <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left">
                <thead class="text-xs text-gray-700 uppercase border-b">
                    <tr>

                        <th scope="col" class="px-6 py-3">
                            Usuario
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Rol
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Nombre
                        </th>
                        <th scope="col" class="px-6 py-3 text-center">
                            Acción
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b  ">

                        <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                            <div className='bg-black rounded-full h-[60px] w-[60px] overflow-hidden'>
                                <img class="w-full h-full object-cover" src="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=8ssXDNTp1XAPan8Bg6mJRwG7EXHshFO5o0v9SIj96nY=" alt="Jese image" />
                            </div>
                            <div class="ps-3">
                                <div class="text-base font-semibold">Neil Sims</div>
                                <div class="font-normal text-gray-500">neil.sims@flowbite.com</div>
                            </div>
                        </th>
                        <td class="px-6 py-4">
                            Usuario
                        </td>
                        <td class="px-6 py-4">
                            Jhon Duran
                        </td>
                        <td class="px-6">
                            <div className='flex gap-4'>

                                <ButtonTypeA
                                    idButton={"btnGoUsers"}
                                    text="Editar"
                                    bgColor="#201F24"
                                    txColor="#F8F5F0"
                                    bdWidth="0px"
                                    bgHvColor="#35333b"
                                    width='w-[50%]'
                                    alternativeStyle=' flex items-center justify-center gap-2'
                                    img={IconEdit}
                                    action={() => navigate(paths.EDITUSERS)}
                                    submitBtn={false}
                                />
                                <ButtonTypeA
                                    idButton={"btnGoUsers"}
                                    text="Eliminar"
                                    bgColor="#D60000"
                                    txColor="#F8F5F0"
                                    bdWidth="0px"
                                    bgHvColor="#d63535"
                                    width='w-[50%]'
                                    alternativeStyle=' flex items-center justify-center gap-2'
                                    img={IconDelete}
                                    // action={()=> set}
                                    submitBtn={false}
                                />
                            </div>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>

    )
}
