

export type DataType = {
    name: string;
    value?: string | number;
    isRequired?: boolean;
    pattern?: string;
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
    onChange?: (e: any,
        name: DataType["name"],
        isRequired: DataType["isRequired"],
        pattern: DataType["pattern"],
    ) => void;
}

export type TransformedDataType = {
    [key: string]: string | number | undefined
}