export type FormFieldType = {
    label: string;
    value?: string | number;
}

export type FormPropsType = {
    fieldsData?: FormFieldType[];
    action?: string;
    method?: string;
}