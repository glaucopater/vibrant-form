
import React from "react";
import { DataType, FormFieldType } from "../../types";
import "./styles.css";

const Input: React.FC<DataType> = ({ name, value, type, isRequired, pattern, nativeValidation = false }) => {
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
            <label className="vibrantFormLabel" htmlFor={`${name}InputText`}>
                {stateLabelValue.name}
            </label>
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