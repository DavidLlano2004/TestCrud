import React, { useState } from 'react'
import { UserFormApp } from '../../../../components/organims/form/UserFormApp'
import { GoBack } from '../../../../components/molecules/goBack/GoBack'
import { InputSimple } from '../../../../components/molecules/inputs/InputSimple'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { CustomSelect } from '../../../../components/molecules/select/SelectSimple'
import { ButtonTypeA } from '../../../../components/molecules/buttons/ButtonTypeA'
import { paths } from '../../../../routes/paths'

export const EditUsers = () => {
    const defaultValues = {
        email: "",
        password: "",
        user: "",
        name: "",
        rol: ""

    }
    const { register, formState: { errors }, control, handleSubmit, watch } = useForm({ defaultValues })

    const [textAlert, setTextAlert] = useState(null)
    const [correctPassword, setCorrectPassword] = useState(false);
    const [viewPassword, setViewPassword] = useState(false);

    const dataForm = watch();
    const navigate = useNavigate()
    const password = watch("password");
    const confirmPassword = watch("confirmPassword");

    const onsubmitLogin = () => {
        console.log('submit login')
    }

    const onSubmit = handleSubmit(onsubmitLogin)
    return (
        <div className='grid place-items-center w-full h-full relative'>
            <div className=' absolute top-0 left-0'>
                <GoBack actionButton={() => navigate(paths.VIEWUSERS)} />
            </div>
            <UserFormApp minWidth='min-w-[50%]'>
                <form onSubmit={onSubmit}>
                    <h1 className='text-primary-principal text-2xl font-semibold '>Editar usuario</h1>
                    <div className=' flex flex-col gap-5 mt-6'>
                        <InputSimple
                            idInputSimple={"inputUserLogin"}
                            errors={errors}
                            label="Usuario"
                            nameRegister="user"
                            register={register}
                            placeholder="Escribe aquí..."
                            validations={{
                                required: "La información es requerido",
                            }}
                            styleLabel="text-primary-principal text-base"
                            width="w-full"
                            inputStyle={"h-[37px] bg-white px-3 py-6 outline-none border-[#BDBDBD] border rounded-md w-full"}
                            hadleOnEnter={onSubmit}
                        />
                        <InputSimple
                            idInputSimple={"inputNameLogin"}
                            errors={errors}
                            label="Nombre"
                            nameRegister="name"
                            register={register}
                            placeholder="Escribe aquí..."
                            validations={{
                                required: "La información es requerido",
                            }}
                            styleLabel="text-primary-principal text-base"
                            width="w-full"
                            inputStyle={"h-[37px] bg-white px-3 py-6 outline-none border-[#BDBDBD] border rounded-md w-full"}
                            hadleOnEnter={onSubmit}
                        />
                        <CustomSelect
                            control={control}
                            name="representative[1].type_identification"
                            staticData={[{ id: 1, state: true, label: "Administrador" }, { id: 2, state: false, label: "Usuario" }]}
                            rules={{ required: "EL tipo de documento es requerido" }}
                            label={"Rol"}
                            placeholder="Selecciona uno"
                            keyOption="label"
                            styleLabel="xl:text-base text-sm text-primary-principal flex justify-between"
                        />
                        <ButtonTypeA
                            idButton={"btnEditUsers"}
                            text="Editar"
                            bgColor="#201F24"
                            txColor="#F8F5F0"
                            bdWidth="0px"
                            bgHvColor="#35333b"
                            width='w-full'
                            alternativeStyle='mt-5 col-span-2'
                            submitBtn={true}
                        />
                    </div>


                </form>
            </UserFormApp>
        </div>
    )
}
