
import React from "react";
import { InputPropsType, FormFieldType } from "../../types";
import "./styles.css";

const Input: React.FC<InputPropsType> = ({ name, value, isRequired, pattern, nativeValidation = false }) => {
    const [stateLabelValue] = React.useState<FormFieldType>({ name, value });

    const nativeValidationProps = {
        ...(nativeValidation && {
            required: isRequired,
            "aria-required": isRequired,
            pattern
        })
    }

    return (
        <>
            <div className="vibrantFormInput">
                <label className="vibrantFormLabel" htmlFor={`${name}InputText`}>
                    {stateLabelValue.name}
                </label>
                <input className="vibrantFormInputText"
                    id={`${name}InputText`}
                    name={name}
                    type="text"
                    {...nativeValidationProps}
                />
            </div>
        </>
    );
}

export default Input;