import { motion } from 'framer-motion'
import React from 'react'
motion

export const Modal = ({ children, isOpen }) => {
    return (
        <>
            {
                isOpen && (
                    <div

                        className='fixed inset-0 z-50 w-full h-[100dvh] flex items-center justify-center bg-black/50 font-Sora'
                    >
                        <motion.div
                            initial={{ y: 20 }}
                            animate={{ y: 0 }}
                            exit={{ y: -20 }}
                            transition={{ type: "spring", stiffness: 700, damping: 20 }}
                            className='bg-white  xl:w-[30%] lg:w-[40%] md:w-[50%] w-[70%]  h-[430px] rounded-xl p-10'>
                            {children}
                        </motion.div>
                    </div>

                )
            }
        </>
    )
}
