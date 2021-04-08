
import { validateFormField } from ".";

describe("Helper", () => {
    it("should test validateFormField with a field", () => {
        const result = validateFormField({ name: "test1", value: "123" });
        expect(result).toBeUndefined();
    })

    it("should test validateFormField with a required field", () => {
        const result = validateFormField({ name: "test2", isRequired: true });
        expect(result).toMatchObject({ "message": "field is required" });
    })

    it("should test validateFormField with a not required  field", () => {
        const result = validateFormField({ name: "test3" });
        expect(result).toBeUndefined();
    })
})
