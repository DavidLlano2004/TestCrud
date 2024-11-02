import React, { useState } from 'react'
import { UserFormApp } from '../../../../components/organims/form/UserFormApp'
import { InputSimple } from '../../../../components/molecules/inputs/InputSimple'
import { CustomSelect } from '../../../../components/molecules/select/SelectSimple'
import { InputController } from '../../../../components/molecules/inputs/InputController'
import { RulesPassword } from '../../../../components/molecules/rulesPassword/RulesPassword'
import { ButtonTypeA } from '../../../../components/molecules/buttons/ButtonTypeA'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { arrayRulesPassword } from '../../../../helpers/ValidationPassword'
import { GoBack } from '../../../../components/molecules/goBack/GoBack'
import { paths } from '../../../../routes/paths'

export const CreateUsers = () => {
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
            </UserFormApp>
        </div>
    )
}
