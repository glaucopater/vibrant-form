
import React from "react";
import { InputPropsType, FormFieldType } from "../../types";
import ValidationError from "../ValidationErrror";
import "./styles.css";

const Input: React.FC<InputPropsType> = ({ name, value, isRequired, pattern, errors, onChange }) => {
    const [stateLabelValue] = React.useState<FormFieldType>({ name, value });

    return (
        <>
            <div className="vibrantFormInput">
                <label className="vibrantFormLabel" htmlFor={`${name}InputText`}>
                    {stateLabelValue.name}
                    <ValidationError errors={errors} />
                </label>

                <input className="vibrantFormInputText"
                    id={`${name}InputText`}
                    name={name}
                    type="text"
                    required={isRequired}
                    pattern={pattern}
                    aria-label={`input${name}`}
                    aria-required={isRequired}
                    onChange={e => onChange(e, name, isRequired, pattern)}
                    defaultValue={stateLabelValue.value}
                />
            </div>
        </>
    );
}

export default Input;