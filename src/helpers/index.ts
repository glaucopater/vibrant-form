import { DataType, TransformedDataType, ValidationErrorType } from "../types";
import { dictionary } from "../dictionary";

export const validateFormField = (field: DataType) => {
    let errors: ValidationErrorType[] = [];
    if (field.isRequired && isNullOrEmpty(field.value)) {
        errors.push({
            name: field.name,
            message: getValidationMessage(dictionary.isRequired, "name", field.name)
        });
    }
    if (field.pattern && field.value) {
        const re = new RegExp(field.pattern);
        if (!re.test(field.value?.toString()))
            errors.push({
                name: field.name,
                message: getValidationMessage(dictionary.shouldMatchPattern, "pattern", field.pattern)
            });
    }
    if (field.minValue && field.value) {
        if (isNaN(Number(field.value))) {
            errors.push({
                name: field.name,
                message: getValidationMessage(dictionary.shouldBeNumber, "name", field.name)
            });
        }
        if (Number(field.value) <= field.minValue) {
            errors.push({
                name: field.name,
                message: getValidationMessage(dictionary.shouldBeGreater, "minValue", field.minValue)
            });
        }
    }
    if (field.maxValue && field.value && !isNaN(Number(field.value))) {
        if (Number(field.value) >= field.maxValue) {
            errors.push({
                name: field.name,
                message: getValidationMessage(dictionary.shouldBeSmaller, "maxValue", field.maxValue)
            });
        }
    }
    return errors;
}

export const transformDataIntoFormField = (data?: DataType[]) => {
    if (!data) return {};
    const transformedData: TransformedDataType = {};
    data.forEach(item => {
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


export const getValidationMessage = (keyWord: string, templatedValue: string, valueToReplace: string | number) => {
    return keyWord.replace(`{{${templatedValue}}}`, valueToReplace.toString());
}


export const getClassNameProps = (className: string, withTheme?: boolean) => {
    return withTheme ? { className: className } : null;
}