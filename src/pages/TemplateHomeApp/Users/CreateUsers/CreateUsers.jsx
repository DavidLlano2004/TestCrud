import React from 'react'
import { UserFormApp } from '../../../../components/organims/form/UserFormApp'
import { InputSimple } from '../../../../components/molecules/inputs/InputSimple'
import { CustomSelect } from '../../../../components/molecules/select/SelectSimple'
import { ButtonTypeA } from '../../../../components/molecules/buttons/ButtonTypeA'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { GoBack } from '../../../../components/molecules/goBack/GoBack'
import { paths } from '../../../../routes/paths'
import { generateRandomId } from '../../../../helpers/numbersRandom'
import { createUserAction } from '../../../../redux/actions/POST/createUserAction'
import { useDispatch } from 'react-redux'
import { generateRandomPhoneNumber } from '../../../../helpers/numbersPhone'

export const CreateUsers = () => {
    const defaultValues = {
        email: "",
        user: "",
        name: {
            first: "",
        },
        rol: ""

    }
    const { register, formState: { errors }, control, handleSubmit } = useForm({ defaultValues })



    const navigate = useNavigate()
    const dispatch = useDispatch()


    const onSubmit = handleSubmit((data) => {
        const newUser = {
            id: generateRandomId(),
            phone: generateRandomPhoneNumber() , 
            ...data,
            rol: data.rol.label
        };
        console.log(newUser);
        debugger

        dispatch(createUserAction(newUser));
        navigate(paths.VIEWUSERS);
    });

    return (
        <div className='grid place-items-center w-full h-full relative'>
            <div className=' absolute top-0 left-0'>
                <GoBack actionButton={() => navigate(paths.VIEWUSERS)} />
            </div>
            <UserFormApp minWidth='min-w-[50%] ' minHeight="min-h-[400px]">
                <form onSubmit={onSubmit}>
                    <h1 className='text-primary-principal text-2xl font-semibold '>Crear usuario</h1>
                    <div className='grid grid-cols-2 gap-5 mt-4 '>
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
                            nameRegister="name.first"
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
                        <InputSimple
                            idInputSimple={"inputEmailLogin"}
                            errors={errors}
                            label="Correo electrónico"
                            nameRegister="email"
                            register={register}
                            placeholder="Escribe aquí..."
                            validations={{
                                required: "La información es requerido",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Ingresa una dirección de correo electrónico válida",
                                }
                            }}
                            styleLabel="text-primary-principal text-base"
                            width="w-full"
                            inputStyle={"h-[37px] bg-white px-3 py-6 outline-none border-[#BDBDBD] border rounded-md w-full"}
                            hadleOnEnter={onSubmit}
                        />
                        <ButtonTypeA
                            idButton={"btnCreateRepresentatives"}
                            text="Crear"
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
