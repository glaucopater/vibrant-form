import { DataType } from "../types";

export const mockFields: DataType[] = [
    {
        name: "Full Name",
        value: "John Doe",
        isRequired: true
    },
    {
        name: "role",
        value: "Designer",
    },
    {
        name: "department",
        value: "wooga.dev",
        pattern: "wooga.",
    },
    {
        name: "salary",
        minValue: 1000,
        isRequired: true
    }
];