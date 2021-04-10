
import React from "react";
import { IValidationErrors } from "../../types";
import "./styles.css";

const ValidationError: React.FC<IValidationErrors> = (props) => {
    const content = props.errors && props.errors.map((error, index) =>
        <li key={index.toString()}>
            {error.message}
        </li>
    );
    if (content)
        return <ul className="vibrantFormInputValidation">{content}</ul>;
    return <></>;
}

export default ValidationError;







