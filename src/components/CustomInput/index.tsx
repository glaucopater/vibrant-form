
import React from "react";

const CustomInput: React.FC<{ name: string, withTheme: boolean }> = ({ name, withTheme }) => {
    return (
        <div>
            <label>{name}</label>
            <input className={withTheme ? "vibrantFormInputText" : ""}
                id={`${name}InputText`}
                name={name}
                type="text"
            />
        </div>
    );
}

export default CustomInput;