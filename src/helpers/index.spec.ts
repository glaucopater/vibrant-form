
import { validateFormField } from ".";
import { dictionary } from "../dictionary";

describe("Helper", () => {
    it("should test validateFormField with a field", () => {
        const result = validateFormField({ name: "test1", value: "123" });
        expect(result).toHaveLength(0);
    })

    it("should test validateFormField with a required field", () => {
        const result = validateFormField({ name: "test2", isRequired: true });
        expect(result).toMatchObject([{ "message": dictionary.isRequired }]);
    })

    it("should test validateFormField with a not required  field", () => {
        const result = validateFormField({ name: "test3" });
        expect(result).toHaveLength(0);
    })
})
