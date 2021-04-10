
import React from "react";

const CustomInput: React.FC<{ name: string }> = ({ name }) => {
    return (
        <div>
            <label>{name}</label>
            <input className="vibrantFormInputText"
                id={`${name}InputText`}
                name={name}
                type="text"
            />
        </div>
    );
}

export default CustomInput;