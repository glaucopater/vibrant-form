
import React from "react";

const CustomInput: React.FC<{ name: string, withTheme: boolean }> = ({ name, withTheme }) => {
    const classNameProps = withTheme ? { className: "vibrantFormInputText" } : null;

    return (
        <div>
            <label>{name}</label>
            <input {...classNameProps}
                id={`${name}InputText`}
                name={name}
                type="text"
            />
        </div>
    );
}

export default CustomInput;