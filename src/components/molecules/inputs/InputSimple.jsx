import React from 'react'
import { CustomAlert } from '../customAlert/CustomAlert';


export const InputSimple = ({
    disabled = false,
    errors,
    hadleOnEnter = () => { },
    imgTooltip = null,
    inputStyle = "rounded-md border border-dimgray-200 px-3 py-2 outline-none text-sm xl:text-base",
    label,
    nameRegister,
    placeholder = "Ingrese",
    register,
    styleLabel = "xl:text-f18 text-[16px] text-primary-gris2",
    type = "text",
    validations,
    value,
    width = "w-full",
    idInputSimple,
    actionBtnCalendar,
    date = false,
    onChangeInput,
    defaultValue,
    refInput = false,
    setViewRefInput,
    styleRefLink = "h-[20px] absolute top-[10px] right-[12px]",
    maxLength,
    feature = true,
    step,
    dataTestId = "inputSimple",
    ...props
}) => {
    return (
        <div className="flex flex-col w-full">
            {label && (
                <label htmlFor={idInputSimple} className={styleLabel}>{label}{imgTooltip}</label>
            )}
            <div className="flex gap-1 relative">
                <input
                    step={step}
                    defaultValue={defaultValue}
                    maxLength={maxLength}
                    id={idInputSimple}
                    max={feature ? null : formattedToday}
                    data-testid={dataTestId}
                    className={`${inputStyle} ${width}`}
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    disabled={disabled}
                    {...register(nameRegister, validations)}
                    {...props}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            e.preventDefault();
                            hadleOnEnter();
                        }
                    }}
                    {
                    ...onChangeInput ? { onChange: onChangeInput } : null
                    }
                />
            </div>

            {errors?.[nameRegister] && (
                <CustomAlert
                    message={errors[nameRegister].message}
                    type="error"
                />
            )}
        </div>
    )
}
