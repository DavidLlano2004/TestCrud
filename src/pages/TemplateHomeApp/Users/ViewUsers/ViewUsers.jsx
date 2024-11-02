import React, { useEffect, useState } from 'react'
import { ButtonTypeA } from '../../../../components/molecules/buttons/ButtonTypeA'
import { TableUsers } from '../../../../components/organims/table/TableUsers'
import { Icons } from '../../../../assets/Icons/IconProvider'
import { useNavigate } from 'react-router-dom'
import { paths } from '../../../../routes/paths'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { getUsersAction } from '../../../../redux/actions/GET/getUsersAction'
import { CustomSelect } from '../../../../components/molecules/select/SelectSimple'
import { useForm } from 'react-hook-form'
const { IconAddUsers } = Icons

export const ViewUsers = () => {
    const [selectedGender, setSelectedGender] = useState(null);

    const { app: { users } } = useSelector(state => state.persistedData)
    const { control } = useForm()


    const navigate = useNavigate()

    const dispatch = useDispatch()

    const handleRefreshUsers = () => {
        dispatch(getUsersAction());
    };

    const genderOptions = [
        { value: 'male', label: 'Masculino' },
        { value: 'female', label: 'Femenino' },
    ];

    const filteredData = selectedGender
        ? users.filter(user => user.gender === selectedGender)
        : users;




    console.log(users)



    return (
        <>
            <div className='flex justify-between'>
                <div className='xl:flex-row flex-col flex gap-5 w-[80%]'>
                    <ButtonTypeA
                        idButton={"btnGoUsers"}
                        text="Crear usuario"
                        bgColor="#287C77"
                        txColor="#F8F5F0"
                        bdWidth="0px"
                        bgHvColor="#3a9690"
                        width='w-[20%]'
                        alternativeStyle='my-3 flex items-center justify-center gap-3'
                        img={IconAddUsers}
                        action={() => navigate(paths.CREATEUSERS)}
                        submitBtn={false}
                    />
                    <ButtonTypeA
                        idButton={"btnGoUsers"}
                        text="Obtener usuarios"
                        txColor="#201F24"
                        bdWidth="1px"
                        width='w-[20%]'
                        alternativeStyle='my-3 flex items-center justify-center gap-3'
                        action={() => handleRefreshUsers()}
                        submitBtn={false}
                    />
                </div>
                <div className='mb-7'>

                    <CustomSelect
                        control={control}
                        name="genderFilter"
                        label="Filtrar por Género"
                        placeholder="Selecciona un género"
                        staticData={genderOptions}
                        onChange={(selectedOption) => setSelectedGender(selectedOption ? selectedOption.value : null)}
                    />
                </div>
            </div>

            <motion.div
                initial={{ x: 20 }}
                animate={{ x: 0 }}
                exit={{ x: -20 }}
                transition={{ type: "spring", stiffness: 700, damping: 20 }}
                className='bg-white w-full h-[93%] overflow-y-auto rounded-lg'>
                <TableUsers
                    dataTable={filteredData}
                />
            </motion.div>

        </>
    )
}
