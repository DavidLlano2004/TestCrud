import React, { useState } from "react"

export const ButtonTypeA = ({
    action = null,
    bdColor = "#627173",
    bdType = "solid",
    bdWidth = "1px",
    bgColor = "#f7f9f7",
    bgHvColor = "#FFFFFF",
    centrado = false,
    styles = "",
    submitBtn = false,
    text = "defaultText",
    txColor = "#627173",
    idButton,
    alternativeStyle = " text-[14px] xl:text-[18px] text-center",
    width = "w-[40%]",
    img,
    link,
    dataTestId = "button_type_a",
    disabled,
    imgStyles

}) => {

    const buttonStyle = {
        border: `${bdWidth} ${bdType} ${bdColor}`,
        backgroundColor: bgColor,
        color: txColor,
        padding: "7px 5px",
        borderRadius: "10px",
        fontWeight: "bold",
        margin: centrado ? "0 auto" : "inehirt",
        height: "fit-content",
        ...styles,
        idButton
    };

    const hoverStyle = {
        backgroundColor: bgHvColor
    };

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const Tag = link ? "a" : "button";
    const extraProps = link ? { href: link, target: "_blank", rel: "noopener noreferrer" } : { type: submitBtn ? "submit" : "button" };

    return (
        <Tag
            id={idButton}
            disabled={disabled}
            data-testid={dataTestId}
            className={`ButtonTypeA ${alternativeStyle} ${width}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={isHovered ? { ...buttonStyle, ...hoverStyle } : buttonStyle}
            onClick={!link ? action : undefined}
            {...extraProps}
        >
            {img && (
                <img
                    src={img}
                    alt="icono"
                    className={`${imgStyles}`}
                />
            )}
            {text}
        </Tag>
    )
}
