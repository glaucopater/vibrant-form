import { FormFieldType } from "./types";
import { strings } from "./strings";

export const validateFormField = (field: FormFieldType) => {
    if (!field.value) {
        return {
            message: strings.fieldIsRequired
        }
    }
}

