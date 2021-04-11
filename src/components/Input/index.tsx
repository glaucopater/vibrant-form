
import React from "react";
import { dictionary } from "../../dictionary";
import { InputPropsType, FormFieldType, ValidationErrorType } from "../../types";
import "./styles.css";


const ValidationMessage: React.FC<{ errors: ValidationErrorType[] }> = ({ errors }) => {
    const message = errors.length > 0 ? errors[0].message : dictionary.validated;
    return <span className="validationMessage">{message}</span>;
}

const Input: React.FC<InputPropsType> = ({ name, value, type, isRequired, placeholder, pattern, nativeValidation = false, errors, isValidated }) => {
    const [stateLabelValue] = React.useState<FormFieldType>({ name, value });

    const nativeValidationProps = {
        ...(nativeValidation && {
            required: isRequired,
            "aria-required": isRequired,
            pattern
        })
    }

    return (
        <div className="vibrantFormInput">
            <div className="vibrantFormLabelContainer">
                <label className="vibrantFormLabel" htmlFor={`${name}InputText`}>
                    {stateLabelValue.name}
                </label>
                {isValidated && <ValidationMessage errors={errors} />}
            </div>
            <input className="vibrantFormInputText"
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