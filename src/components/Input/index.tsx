
import React from "react";
import { DataType, ValidationErrorType, FormFieldType } from "../../types";
import "./styles.css";

const Input: React.FC<DataType & { errors: ValidationErrorType[] }> = ({ name, value, type, isRequired, pattern, nativeValidation = false, errors }) => {
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
                {errors.length > 0 && <span className="validationMessage">{errors[0].message}</span>}
            </div>
            <input className="vibrantFormInputText"
                id={`${name}InputText`}
                name={name}
                type={type}
                defaultValue={stateLabelValue.value}
                {...nativeValidationProps}
            />
        </div>
    );
}

export default Input;