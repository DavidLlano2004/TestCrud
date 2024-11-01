import { motion } from 'framer-motion'
import React from 'react'

export const UserFormApp = ({ children, minWidth = "min-w-[20%]" }) => {
    return (
        <motion.div
            initial={{  y: 20 }}
            animate={{  y: 0 }}
            exit={{  y: -20 }}
            transition={{ type: "spring", stiffness: 700, damping: 20 }}
            className={`bg-white lg:w-[460px] ${minWidth} w-auto min-h-[525px] max-h-[90%] overflow-y-auto h-auto rounded-2xl p-10`}>
            {children}
        </motion.div>
    )
}
