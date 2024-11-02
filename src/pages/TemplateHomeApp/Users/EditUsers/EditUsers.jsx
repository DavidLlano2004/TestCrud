import React, { useState } from 'react'
import { UserFormApp } from '../../../../components/organims/form/UserFormApp'
import { GoBack } from '../../../../components/molecules/goBack/GoBack'
import { InputSimple } from '../../../../components/molecules/inputs/InputSimple'
import { useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'
import { CustomSelect } from '../../../../components/molecules/select/SelectSimple'
import { ButtonTypeA } from '../../../../components/molecules/buttons/ButtonTypeA'
import { paths } from '../../../../routes/paths'
import { updateUserAction } from '../../../../redux/actions/PUT/updateInfoUsers'
import { useDispatch } from 'react-redux'

export const EditUsers = () => {

    const location = useLocation();
    const user = location.state?.user;

    const defaultValues = {
        user: user?.user || "Sin usuario",
        phone: user?.phone || "",
        name: user?.name?.first || "",
        rol: user?.rol || "",
    };

    const { register, formState: { errors }, control, handleSubmit, watch } = useForm({ defaultValues });
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const dataForm = watch()
    console.log(dataForm);


    const onSubmit = (data) => {
        const updatedData = {
            user: data.user,
            phone: data.phone,
            name: {
                first: data.name,
            },
        };

        console.log('Datos a actualizar:', updatedData); // Verifica los datos
        console.log('Teléfono del usuario:', user.phone);
        debugger

        dispatch(updateUserAction(user.phone, updatedData));
        navigate(paths.VIEWUSERS);
    };

    console.log(user.phone);


    return (
        <div className='grid place-items-center w-full h-full relative'>
            <div className=' absolute top-0 left-0'>
                <GoBack actionButton={() => navigate(paths.VIEWUSERS)} />
            </div>
            <UserFormApp minWidth='min-w-[50%]'>
                <form onSubmit={handleSubmit(onSubmit)}>
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
                        <InputSimple
                            idInputSimple={"inputNameLogin"}
                            errors={errors}
                            label="Teléfono"
                            nameRegister="phone"
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
                            name="rol"
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
