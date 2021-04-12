
import React from "react";
import Input from "../../components/Input";
import { FormPropsType } from "../../types";
import "./styles.css";

const InputFields: React.FC<FormPropsType> = ({ fieldsData, formErrors, component: Component = Input, withTheme }) => {
    const isValidated = typeof formErrors !== "undefined";
    const content = fieldsData && fieldsData.map((field, index) =>
        <Component
            key={index.toString()}
            {...field}
            isValidated={isValidated}
            withTheme={withTheme}
            errors={formErrors ? formErrors?.filter(error => error.name === field.name) : []
            }
        />);

    return <div className={withTheme ? "vibrantFormInputFields" : ""}>{content}</div>;
}

export default InputFields;