import React from 'react'
import { ButtonTypeA } from '../../../../components/molecules/buttons/ButtonTypeA'
import { TableUsers } from '../../../../components/organims/table/TableUsers'
import { Icons } from '../../../../assets/Icons/IconProvider'
import { useNavigate } from 'react-router-dom'
import { paths } from '../../../../routes/paths'
import { motion } from 'framer-motion'
const { IconAddUsers } = Icons

export const ViewUsers = () => {
    const navigate = useNavigate()
    return (
        <>
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
            <motion.div
                initial={{ x: 20 }}
                animate={{ x: 0 }}
                exit={{ x: -20 }}
                transition={{ type: "spring", stiffness: 700, damping: 20 }}
                className='bg-white w-full h-[93%] rounded-lg'>
                <TableUsers />
            </motion.div>
        </>
    )
}
