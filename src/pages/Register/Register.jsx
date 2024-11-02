import React, { useState } from 'react'
import { UserFormApp } from '../../components/organims/form/UserFormApp'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { InputSimple } from '../../components/molecules/inputs/InputSimple'
import { InputController } from '../../components/molecules/inputs/InputController'
import { ButtonTypeA } from '../../components/molecules/buttons/ButtonTypeA'
import { CustomSelect } from '../../components/molecules/select/SelectSimple'
import { paths } from '../../routes/paths'
import { RulesPassword } from '../../components/molecules/rulesPassword/RulesPassword'
import { arrayRulesPassword } from '../../helpers/ValidationPassword'
import { useDispatch } from 'react-redux'
import { createUserAction } from '../../redux/actions/POST/createUserAction'
import { Images } from '../../assets/Images/ImageProvider'
const { ImageSuccess } = Images

export const Register = () => {
    const defaultValues = {
        email: "",
        password: "",
        user: "",
        name: "",
        rol: ""

    }
    const { register, formState: { errors }, control, handleSubmit, watch } = useForm({ defaultValues })

    const [successData, setSuccessData] = useState(true)
    const [correctPassword, setCorrectPassword] = useState(false);
    const [viewPassword, setViewPassword] = useState(false);

    const dataForm = watch();
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const password = watch("password");
    const confirmPassword = watch("confirmPassword");

    const onsubmitLogin = () => {

        const newData = {
            ...dataForm,
            rol: dataForm.rol.label
        }
        dispatch(createUserAction(newData));
        setSuccessData(false)
    }

    const onSubmit = handleSubmit(onsubmitLogin)
    return (
        <UserFormApp minWidth='min-w-[40%]'>
            {
                successData ?

                    <>
                        <form onSubmit={onSubmit}>
                            <h1 className='text-primary-principal text-2xl font-semibold '>Regístrate</h1>
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
                                <InputController
                                    idBtnViewPassword='btnViewPassword'
                                    idInputController={"inputPasswordLogin"}
                                    control={control}
                                    name={"password"}
                                    estrict={false}
                                    rules={{ required: "Campo requerido" }}
                                    label="Contraseña"
                                    placeholder="Ingresa tu contraseña"
                                    type="password"
                                    styleDiv="w-full"
                                    styleLabel="text-primary-principal text-base"
                                    styleInput="h-[37px] bg-white px-3 py-6 outline-none border border-[#BDBDBD] rounded-md w-full"
                                    inputProps={{ onFocus: () => setViewPassword(true) }}

                                />

                                <InputController
                                    idBtnViewPassword='btnViewPasswordConfirm'
                                    idInputController={"inputPasswordConfirmLogin"}
                                    control={control}
                                    name={"confirmPassword"}
                                    estrict={false}
                                    rules={{ required: "Campo requerido" }}
                                    disabled={!correctPassword}
                                    label="Contraseña"
                                    placeholder="Ingresa tu contraseña"
                                    type="password"
                                    styleDiv="w-full"
                                    styleLabel="text-primary-principal text-base"
                                    styleInput="h-[37px] bg-white px-3 py-6 outline-none border border-[#BDBDBD] rounded-md w-full"

                                />

                                {viewPassword && (
                                    <div className=" col-span-2 mt-4 text-left bg-[#EBF7FF] bg-no-repeat bg-padding-box bg-cover bg-center border-2 border-primary-80 rounded-3xs p-4 opacity-100">
                                        <b className="font-bold xl:text-base text-sm  leading-[22px] tracking-[0.07px] text-[#202626] text-left opacity-100">
                                            Hagamos que tu cuenta sea segura
                                        </b>
                                        <div className="mt-3 mb-3">
                                            <RulesPassword
                                                arrayRulesPassword={arrayRulesPassword(password)}
                                                confirmPassword={confirmPassword}
                                                password={password}
                                                setFlagCorrectPassword={setCorrectPassword}
                                            />
                                        </div>
                                    </div>
                                )}

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
                        <div className='flex justify-center'>
                            <button onClick={() => navigate(paths.LOGIN)} className='mt-10 xl:text-base text-sm'>¿Ya tienes una cuenta? <b>Inicia sesión</b></button>
                        </div>

                    </>


                    :
                    <div className='flex flex-col gap-10'>

                        <img className='m-auto mt-16' src={ImageSuccess} alt="ImageSuccess" />
                        <p className='text-center text-xl font-semibold'>Te has registrado con éxito</p>
                        <ButtonTypeA
                            idButton={"btnInSeSionSuccess"}
                            text="Iniciar sesión"
                            bgColor="#201F24"
                            txColor="#F8F5F0"
                            bdWidth="0px"
                            bgHvColor="#35333b"
                            width='w-[80%]'
                            alternativeStyle='mt-5 col-span-2 m-auto'
                            action={()=>navigate(paths.LOGIN)}
                        />
                    </div>

            }


        </UserFormApp>
    )
}
