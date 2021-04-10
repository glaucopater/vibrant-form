import React from "react";
import Input from "../../components/Input";
import { FormPropsType, IValidationErrors, FormStateType } from "./types";
import Submit from "../../components/Submit";
import { defaultProps } from "../../settings";
import { validateFormField } from "../../helpers";
import "./styles.css";

const Form: React.FC<FormPropsType> = ({ fieldsData }) => {
  const [state, setState] = React.useState<FormStateType>();


  const [formErrors, setFormErrors] = React.useState<IValidationErrors["errors"]>(undefined);

  const handleOnSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log("submitting", state);
  }

  const handleOnInputChange = (e: { target: { value: string | number } }, name: string, isRequired?: boolean) => {
    const error = validateFormField({ name, value: e.target.value, isRequired });
    let currentErrors;
    if (error) {
      currentErrors = [...formErrors || [], error];
    }
    else if (formErrors && formErrors?.length > 0) {
      currentErrors = formErrors.filter(err => err.name !== name);
    }
    setFormErrors(currentErrors);
  }

  const handleOnChange = (e: any) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })

  }

  const fields = fieldsData && fieldsData.map((field, index) =>
    <Input
      key={index.toString()}
      {...field}
      errors={formErrors?.filter(err => err.name === field.name)}
      onChange={handleOnInputChange}
    />);


  console.log(state);

  return (
    <form className="vibrantForm" {...defaultProps} onSubmit={handleOnSubmit} onChange={handleOnChange}>
      {fields}
      <Submit />
    </form>
  );
}

export default Form;