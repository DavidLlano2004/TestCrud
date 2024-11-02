import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

export const RulesPassword = ({
    arrayRulesPassword,
    confirmPassword,
    password,
    setFlagCorrectPassword,
}) => {
    const validatePassword = (valid) => valid;
    const [isCorrectPassword, setIsCorrectPassword] = useState(true);

    useEffect(() => {
        const passwordCorrectAll = arrayRulesPassword.every((rule) => validatePassword(rule.valid));
        if (passwordCorrectAll) {
            setIsCorrectPassword(true);
            setFlagCorrectPassword(true);
        } else {
            const timeoutId = setTimeout(() => {
                setIsCorrectPassword(false);
                setFlagCorrectPassword(false);
            }, 1000);
            return () => clearTimeout(timeoutId);
        }
    }, [arrayRulesPassword, password, confirmPassword, setFlagCorrectPassword]);

    const getPasswordMatchMessage = () => {
        if (password === confirmPassword) {
            return "✔ Las contraseñas coinciden";
        } else {
            return "• Las contraseñas no coinciden";
        }
    };

    const renderRuleMessage = (rule, index) => {
        const isValid = validatePassword(rule.valid);
        return (
            <h1
                key={index}
                className={` xl:text-base text-sm  leading-[20px] tracking-[0.07px] ${isValid ? "text-primary-title1 font-semibold" : "text-[#627173]"} text-left opacity-100`}
            >
                {isValid ? "✔" : "•"} {rule.text}
            </h1>
        );
    };

    return (
        <>
            {isCorrectPassword ? (
                <h1 className={` xl:text-base text-sm  leading-[20px] tracking-[0.07px] ${password === confirmPassword ? "text-primary-title1 font-semibold" : "text-[#627173]"} text-left opacity-100`}>
                    {getPasswordMatchMessage()}
                </h1>
            ) : (
                arrayRulesPassword.map(renderRuleMessage)
            )}
        </>
    );
};

RulesPassword.propTypes = {
    arrayRulesPassword: PropTypes.array,
    confirmPassword: PropTypes.string,
    password: PropTypes.string,
    setFlagCorrectPassword: PropTypes.func,
};
