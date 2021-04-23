import { DataType } from "../types";

export const initialData: DataType[] = [
    {
        name: "Full Name",
        type: "text",
        isRequired: true,
        placeholder: "type name and surname"
    },
    {
        name: "role",
        type: "text",
        isRequired: true,
        placeholder: "type a role like Developer, Tester..."
    },
    {
        name: "department",
        type: "text",
        pattern: "wooga.",
        isRequired: true,
        placeholder: "type a department with format wooga."
    },
    {
        name: "salary",
        type: "text",
        minValue: 1000,
        isRequired: true,
        placeholder: "type an amount greater than 1000"
    },
];

export const mockFields: DataType[] = [
    {
        name: "Full Name",
        value: "John Doe",
        type: "text",
        isRequired: true,
        placeholder: "type name and surname"
    },
    {
        name: "role",
        value: "Designer",
        type: "text",
        isRequired: true,
        placeholder: "type a role like Developer, Tester..."
    },
    {
        name: "department",
        value: "wooga.dev",
        type: "text",
        pattern: "wooga.",
        isRequired: true,
        placeholder: "type a department with format wooga."
    },
    {
        name: "salary",
        value: 900,
        type: "text",
        minValue: 1000,
        isRequired: true,
        placeholder: "type an amount greater than 1000"
    },
    {
        name: "salary",
        value: 900,
        type: "text",
        minValue: 1000,
        isRequired: true,
        placeholder: "type an amount greater than 1000"
    },
];