
import React from "react";
import "./styles.css";

const CustomInput: React.FC<{ name: string, withTheme: boolean }> = ({ name, withTheme }) => {
    const classNameProps = withTheme ? { className: "customInputText" } : null;

    return (
        <div>
            <input {...classNameProps}
                id={`${name}InputText`}
                name={name}
                placeholder={"type a value..."}
                type="text"
            />
        </div>
    );
}

export default CustomInput;