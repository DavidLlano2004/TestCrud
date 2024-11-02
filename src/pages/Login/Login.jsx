import React, { useEffect, useState } from 'react'
import { UserFormApp } from '../../components/organims/form/UserFormApp'
import { InputSimple } from '../../components/molecules/inputs/InputSimple'
import { useForm } from 'react-hook-form'
import { InputController } from '../../components/molecules/inputs/InputController'
import { CustomAlert } from '../../components/molecules/customAlert/CustomAlert'
import { ButtonTypeA } from '../../components/molecules/buttons/ButtonTypeA'
import { paths } from '../../routes/paths'
import { useNavigate } from 'react-router-dom'
import { loginCase } from '../../redux/slices/authSlice/AuthSlice'
import { useDispatch, useSelector } from 'react-redux'


export const Login = () => {

    const { register, formState: { errors }, control, handleSubmit } = useForm()

    const { app: { users } } = useSelector(state => state.persistedData)


    const [textAlert, setTextAlert] = useState(null)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onsubmitLogin = (data) => {
        const foundUser = users.find(user => user.email === data.email && user.password === data.password);

        if (foundUser) {
            dispatch(loginCase({
                email: foundUser.email,
                name: foundUser.name,
                is_active: true,
                user: foundUser.user,
                rol: foundUser.rol
            }));
            navigate(paths.TEMPLATEHOMEAPP)

        } else {
            setTextAlert("Credenciales incorrectas");
        }
    }

    const onSubmit = handleSubmit(onsubmitLogin)

    console.log(users);


    return (
        <UserFormApp>
            <form onSubmit={onSubmit}>
                <h1 className='text-primary-principal text-2xl font-semibold my-10'>Iniciar Sesión</h1>
                <div className='flex flex-col gap-5 mt-4 w-full '>
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
                        styleLabel="text-primary-gris8 text-base "
                        width="w-full"
                        inputStyle={"h-[37px] bg-white px-3 py-6 outline-none border-[#BDBDBD] border rounded-md w-full"}
                        hadleOnEnter={onSubmit}
                    />
                    <InputController
                        idInputController={"inputPasswordLogin"}
                        control={control}
                        name={"password"}
                        rules={{ required: "Por favor, ingresar tu contraseña" }}
                        label="Contraseña"
                        placeholder="Ingresa tu contraseña"
                        type="password"
                        styleDiv="w-full"
                        styleLabel="text-primary-gris8 text-base"
                        styleInput="h-[37px] bg-white px-3 py-6 outline-none border border-[#BDBDBD] rounded-md w-full"
                        hadleOnEnter={onSubmit}
                    />

                    {textAlert && <CustomAlert message={textAlert} type="error" fullWidth={true} />}

                    <ButtonTypeA
                        idButton={"btnCreateRepresentatives"}
                        text="Ingresar"
                        bgColor="#201F24"
                        txColor="#F8F5F0"
                        bdWidth="0px"
                        bgHvColor="#35333b"
                        width='w-full'
                        alternativeStyle='mt-5'
                        submitBtn={true}
                    />
                </div>

            </form>
            <div className='flex justify-center'>
                <button onClick={() => navigate(paths.REGISTER)} className='mt-10 xl:text-base text-sm'>¿No tienes una cuenta? <b>Regístrate</b></button>
            </div>

        </UserFormApp>

    )
}
