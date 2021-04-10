import { DataType, validationErrorType } from "../types";
import { dictionary } from "../dictionary";

export const validateFormField = (field: DataType) => {
    const errors: validationErrorType[] = [];
    if (field.isRequired && (!field.value || field.value === "")) {
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

export const transformDataIntoFormField = (data: DataType[]) => {
    return data.map(item => ({ name: item.name, value: item.value }));
}