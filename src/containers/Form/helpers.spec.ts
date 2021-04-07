
import { validateFormField } from "./helpers";

describe("Helper", () => {
    it("should test validateFormField with a field", () => {
        const result = validateFormField({ label: "test", value: "123" });
        expect(result).toBeUndefined();
    })

    it("should test validateFormField without a field", () => {
        const result = validateFormField({ label: "test" });
        expect(result).toMatchObject({ "message": "field is required" });
    })
})
