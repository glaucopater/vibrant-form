
import React from "react";
import { InputPropsType, FormFieldType } from "../../types";
import "./styles.css";

const Input: React.FC<InputPropsType> = ({ name, value, isRequired, pattern }) => {
    const [stateLabelValue] = React.useState<FormFieldType>({ name, value });

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
                    aria-label={`input${name}`}
                    // required={isRequired} pattern={pattern} aria-required={isRequired}
                    defaultValue={stateLabelValue.value}
                />
            </div>
        </>
    );
}

export default Input;