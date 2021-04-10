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
    if (field.minValue && field.value) {
        if (field.value <= field.minValue) {
            errors.push({
                name: field.name,
                message: dictionary.shouldBeGreater
            });
        }
    }
    return errors;
}

export const transformDataIntoFormField = (data?: DataType[]) => {
    if (!data) return {};
    const transformedData: TransformedDataType = {};
    data.map(item => {
        transformedData[item.name] = item.value;
    });
    return transformedData;

}

export const isNullOrEmpty = (val: string | number | undefined) => {
    return (typeof val == 'undefined' || val === "");
}


export const validateForm = (formData: TransformedDataType, fieldsData: DataType[] | undefined) => {
    const errs = Object.keys(formData).map(key => {
        const fieldToValidate = fieldsData?.filter(field => key === field.name)[0];
        if (fieldToValidate) {
            const fieldValidationErrors = validateFormField({ ...fieldToValidate, value: formData[key] });
            return fieldValidationErrors;
        }
        else return [];
    });
    return errs.flat();
}