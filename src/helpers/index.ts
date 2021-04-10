import { DataType, TransformedDataType, ValidationErrorType } from "../types";
import { dictionary } from "../dictionary";

export const validateFormField = (field: DataType) => {
    let errors: ValidationErrorType[] = [];
    if (field.isRequired && isNullOrEmpty(field.value)) {
        errors.push({
            name: field.name,
            message: dictionary.isRequired
        });
    }
    if (field.pattern && field.value) {
        const re = new RegExp(field.pattern);
        if (!re.test(field.value?.toString()))
            errors.push({
                name: field.name,
                message: dictionary.shouldMatchPattern
            });
    }

    return errors;
}


export const transformDataIntoFormField = (data?: DataType[]) => {
    if (!data) return {};
    else {
        const transformedData: TransformedDataType = {};
        data.map(item => {
            transformedData[item.name] = item.value;
        });
        return transformedData;
    }
}

export const isNullOrEmpty = (val: string | number | undefined) => {
    return (typeof val == 'undefined' || val === "");
}