
import React from "react";
import Input from "../../components/Input";
import { FormPropsType } from "../../types";

const InputFields: React.FC<FormPropsType> = ({ fieldsData }) => {
    const content = fieldsData && fieldsData.map((field, index) =>
        <Input
            key={index.toString()}
            {...field}
        />);
    return <>{content}</>;
}

export default InputFields;