
import { validateFormField, getValidationMessage } from ".";
import { dictionary } from "../dictionary";

describe("Helper", () => {
    it("should test validateFormField with a field", () => {
        const result = validateFormField({ name: "test1", value: "123", type: "text" });
        expect(result).toHaveLength(0);
    })

    it("should test validateFormField with a required field", () => {
        const result = validateFormField({ name: "test2", isRequired: true, type: "text" });
        expect(result).toMatchObject([{ "message": getValidationMessage(dictionary.isRequired, "name", "test2") }]);
    })

    it("should test validateFormField with a not required  field", () => {
        const result = validateFormField({ name: "test3", type: "text" });
        expect(result).toHaveLength(0);
    });

    it("should test tag with a not required field", () => {
        const result1 = getValidationMessage(dictionary.shouldMatchPattern, "pattern", "tester.1");
        expect(result1).toBe("This value should match 'tester.1' ⚠️");

        const result2 = getValidationMessage(dictionary.shouldBeGreater, "minValue", "100");
        expect(result2).toBe("This value should be > 100 ⚠️");
    });

});
