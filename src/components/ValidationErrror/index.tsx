
import React from "react";
import { ValidationErrorType } from "../../types";
import "./styles.css";

const ValidationError: React.FC<{ errors: ValidationErrorType[] }> = ({ errors }) => {
    const content = errors && errors.map((error, index) =>
        <li key={index.toString()}>
            {error.name}: {error.message}
        </li>
    );
    if (content)
        return <ul className="vibrantFormInputValidation">{content}</ul>;
    return <></>;
}

export default ValidationError;







