import React, { useState } from 'react'
import { ButtonTypeA } from '../../molecules/buttons/ButtonTypeA'
import { Icons } from '../../../assets/Icons/IconProvider'
import { useNavigate } from 'react-router-dom'
import { paths } from '../../../routes/paths'
import { useDispatch } from 'react-redux'
import { Modal } from '../modal/Modal'
import { Images } from '../../../assets/Images/ImageProvider'
import { deleteUserAction } from '../../../redux/actions/DELETE/deleteUserAction'
const { IconEdit, IconDelete, IconDefaultUser } = Icons
const { ImageWarning } = Images

export const TableUsers = ({
    dataTable,
}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [confirmDelete, setConfirmDelete] = useState(false);
    const [userToDelete, setUserToDelete] = useState(null);

    const confirmDeleteAction = (phone) => {
        setUserToDelete(phone);
        setConfirmDelete(true);
    };

    const handleDelete = () => {
        dispatch(deleteUserAction(userToDelete));
        setConfirmDelete(false); 
        setUserToDelete(null);
    };

    const handleCancelDelete = () => {
        setConfirmDelete(false);
        setUserToDelete(null);
    };
    return (
        <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left">
                <thead class="text-xs text-gray-700 uppercase border-b">
                    <tr>

                        <th scope="col" class="px-6 py-3">
                            Usuario
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Phone
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
                    {
                        dataTable?.map((data, index) => (

                            <tr class="bg-white border-b  ">

                                <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                    <div className='bg-black rounded-full h-[60px] w-[60px] overflow-hidden'>
                                        <img class="w-full h-full object-cover" src={data?.picture ? data?.picture?.medium : IconDefaultUser} alt="IconDefaultUser" />
                                    </div>
                                    <div class="ps-3">
                                        <div class="font-normal text-gray-500">{data?.email}</div>
                                    </div>
                                </th>
                                <td class="px-6 py-4">
                                    {data?.phone}

                                </td>
                                <td class="px-6 py-4">
                                    {data?.name?.first} {data?.name?.last}
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
                                            action={() => navigate(`${paths.EDITUSERS}${data.id}`, { state: { user: data } })}
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
                                            action={() => confirmDeleteAction(data?.phone)}
                                            submitBtn={false}
                                        />
                                    </div>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
            <Modal isOpen={confirmDelete}>
                <div className='flex flex-col gap-10'>
                    <img className='m-auto mt-10' src={ImageWarning} alt="" />
                    <p className='text-center font-semibold text-primary-principal'>¿Estás de seguro de eliminar este usuario?</p>
                    <div className='flex gap-4'>
                        <ButtonTypeA
                            idButton={"btnGoUsers"}
                            text="Cancelar"
                            bgColor="#201F24"
                            txColor="#F8F5F0"
                            bdWidth="0px"
                            bgHvColor="#35333b"
                            width='w-[50%]'
                            alternativeStyle=' flex items-center justify-center gap-2'
                            action={handleCancelDelete}
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
                            action={handleDelete}
                            submitBtn={false}
                        />
                    </div>
                </div>
            </Modal>
        </div>

    )
}
