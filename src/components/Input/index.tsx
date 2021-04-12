
import React from "react";
import { dictionary } from "../../dictionary";
import { InputPropsType, FormFieldType, ValidationErrorType } from "../../types";
import "./styles.css";


const ValidationMessage: React.FC<{ errors: ValidationErrorType[], withTheme?: boolean }> = ({ errors, withTheme }) => {
    const message = errors.length > 0 ? errors[0].message : dictionary.validated;
    return <span className={withTheme ? "validationMessage" : ""}> {message}</ span>;
}

const Input: React.FC<InputPropsType> = ({ name, value, type, isRequired, placeholder, pattern, nativeValidation = false, errors, isValidated, withTheme }) => {
    const [stateLabelValue] = React.useState<FormFieldType>({ name, value });

    const nativeValidationProps = {
        ...(nativeValidation && {
            required: isRequired,
            "aria-required": isRequired,
            pattern
        })
    }

    return (
        <div className={withTheme ? "vibrantFormInput" : ""}>
            <div className={withTheme ? "vibrantFormLabelContainer" : ""}>
                <label className={withTheme ? "vibrantFormLabel" : ""} htmlFor={`${name}InputText`}>
                    {stateLabelValue.name}
                </label>
                {isValidated && <ValidationMessage errors={errors} withTheme={withTheme} />}
            </div>
            <input className={withTheme ? "vibrantFormInputText" : ""}
                id={`${name}InputText`}
                name={name}
                type={type}
                defaultValue={stateLabelValue.value}
                placeholder={placeholder || ""}
                {...nativeValidationProps}
            />
        </div>
    );
}

export default Input;