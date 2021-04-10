

export type DataType = {
    name: string;
    value?: string | number;
    isRequired?: boolean;
    pattern?: string;
    nativeValidation?: boolean;
}

export type FormFieldType = Pick<DataType, "name" | "value">;

export type FormStateType = { [name: string]: FormFieldType };

export type FormPropsType = {
    fieldsData?: DataType[];
    action?: string;
    method?: string;
}

export type ValidationErrorType = {
    name: string;
    message: string;
}

export type InputPropsType = DataType & {
    nativeValidation?: boolean
}


export type ErrorsPropsType = {
    formErrors?: ValidationErrorType[][];
}

export type TransformedDataType = {
    [key: string]: string | number | undefined
}