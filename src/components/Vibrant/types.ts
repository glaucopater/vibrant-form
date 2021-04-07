export type FormFieldType = {
    label: string;
    value: string | number | undefined;
}

export type FormPropsType = {
    fields?: FormFieldType[];
}