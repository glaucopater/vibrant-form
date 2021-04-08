
import React from "react";
import { InputPropsType, FormFieldType } from "../../containers/Form/types";
import ValidationError from "../ValidationErrror";
import "./styles.css";

const Input: React.FC<InputPropsType> = ({ name, value, isRequired, errors, onChange }) => {
    const [stateLabelValue] = React.useState<FormFieldType>({ name, value });

    return (
        <>
            <div className="vibrantFormInput">
                <label className="vibrantFormLabel">{stateLabelValue.name}</label>
                <input className="vibrantFormInputText"
                    name={name}
                    type="text"
                    required={isRequired}
                    onChange={e => onChange(e, name, isRequired)}
                    defaultValue={stateLabelValue.value}
                />
            </div>
            <ValidationError errors={errors} />
        </>
    );
}

export default Input;