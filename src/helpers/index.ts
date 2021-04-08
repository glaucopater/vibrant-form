import { FormFieldType } from "../containers/Form/types";
import { dictionary } from "../dictionary";

export const validateFormField = (field: FormFieldType) => {
    if (field.isRequired && (!field.value || field.value === "")) {
        return {
            name: field.name,
            message: dictionary.fieldIsRequired
        }
    }
}

