
import React from "react";
import ValidationError from "../ValidationErrror";
import { ErrorsPropsType } from "../../types";

const Errors: React.FC<ErrorsPropsType> = ({ formErrors }) => {
    const content = formErrors && formErrors.map((errors, index) =>
        <ValidationError
            key={index.toString()}
            errors={errors}
        />);
    return <>{content}</>;
}

export default Errors;