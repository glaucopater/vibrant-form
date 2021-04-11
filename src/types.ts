import React from "react";


export type DataType = {
    name: string;
    value?: string | number;
    type: string;
    isRequired?: boolean;
    pattern?: string;
    minValue?: number;
    maxValue?: number;
    nativeValidation?: boolean;
}

export type InputPropsType = DataType & {
    errors: ValidationErrorType[]; isValidated?: boolean;
};

export type FormFieldType = Pick<DataType, "name" | "value">;

export type FormPropsType = {
    fieldsData?: DataType[];
    formErrors?: ErrorsPropsType["formErrors"];
    component?: React.FC<any>;
    action?: string;
    method?: string;
}

export type ValidationErrorType = {
    name: string;
    message: string;
}

export type ErrorsPropsType = {
    formErrors?: ValidationErrorType[];
}

export type TransformedDataType = {
    [key: string]: string | number | undefined
}