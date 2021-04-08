export type FormFieldType = {
    name: string;
    value?: string | number;
    isRequired?: boolean;
}

export type FormPropsType = {
    fieldsData?: FormFieldType[];
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

export type InputPropsType = FormFieldType & IValidationErrors & {
    onChange: (e: any, name: FormFieldType["name"], isRequired: FormFieldType["isRequired"]) => void;
}
