import { DataType } from "../containers/Form/types";
import { dictionary } from "../dictionary";

export const validateFormField = (field: DataType) => {
    if (field.isRequired && (!field.value || field.value === "")) {
        return {
            name: field.name,
            message: dictionary.fieldIsRequired
        }
    }
}

export const transformDataIntoFormField = (data: DataType[]) => {
    return data.map(item => ({ name: item.name, value: item.value }));
}