import { DataType } from "../types";

export const mockFields: DataType[] = [
    {
        name: "Full Name",
        value: "John Doe",
        type: "text",
        isRequired: true
    },
    {
        name: "role",
        value: "Designer",
        type: "text",
    },
    {
        name: "department",
        value: "wooga.dev",
        type: "text",
        pattern: "wooga.",
    },
    {
        name: "salary",
        type: "text",
        minValue: 1000,
        isRequired: true
    },
];