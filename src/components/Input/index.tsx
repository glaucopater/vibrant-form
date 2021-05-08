
import React from "react";
import { dictionary } from "../../dictionary";
import { getClassNameProps } from "../../helpers";
import { InputPropsType, ValidationErrorType } from "../../types";
import "./styles.css";

const ValidationMessage: React.FC<{ errors: ValidationErrorType[], withTheme?: boolean }> = ({ errors, withTheme }) => {
    const message = errors.length > 0 ? errors[0].message : dictionary.validated;
    const classNameProps = withTheme ? { className: "validationMessage" } : null;
    return <span {...classNameProps} > {message}</ span >;
}

const Input: React.FC<InputPropsType> = ({ name, value, type, isRequired, placeholder, pattern, nativeValidation = false, errors, isValidated, withTheme }) => {

    const nativeValidationProps = {
        ...(nativeValidation && {
            required: isRequired,
            "aria-required": isRequired,
            pattern
        })
    }

    return (
        <div {...getClassNameProps("vibrantFormInput", withTheme)} >
            <div {...getClassNameProps("vibrantFormLabelContainer", withTheme)} >
                <label {...getClassNameProps("vibrantFormLabel", withTheme)} htmlFor={`${name}InputText`}>
                    {name}
                </label>
                {isValidated && <ValidationMessage errors={errors} withTheme={withTheme} />}
            </div>
            <input {...getClassNameProps("vibrantFormInputText", withTheme)}
                id={`${name}InputText`}
                name={name}
                type={type}
                defaultValue={value}
                placeholder={placeholder || ""}
                {...nativeValidationProps}
            />
        </div>
    );
}

export default Input;