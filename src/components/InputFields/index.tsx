
import React from "react";
import Input from "../../components/Input";
import { FormPropsType } from "../../types";
import "./styles.css";

const InputFields: React.FC<FormPropsType> = ({ fieldsData }) => {
    const content = fieldsData && fieldsData.map((field, index) =>
        <Input
            key={index.toString()}
            {...field}
        />);
    return <div className="vibrantFormInputFields">{content}</div>;
}

export default InputFields;