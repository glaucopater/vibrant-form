

export type DataType = {
    name: string;
    value?: string | number;
    isRequired?: boolean;
}

export type FormFieldType = Pick<DataType, "name" | "value">;


export type FormStateType = { [name: string]: FormFieldType };


export type FormPropsType = {
    fieldsData?: DataType[];
    action?: string;
    method?: string;
}

export type validationErrorType = {
    name: string;
    message: string;
}

export type IValidationErrors = {
    errors?: validationErrorType[];
}

export type InputPropsType = DataType & IValidationErrors & {
    onChange: (e: any, name: DataType["name"], isRequired: DataType["isRequired"]) => void;
}
