import React from "react";
import Input from "../../components/Input";
import { FormPropsType, ValidationErrorType, TransformedDataType } from "../../types";
import Submit from "../../components/Submit";
import { defaultProps } from "../../settings";
import { transformDataIntoFormField, validateFormField } from "../../helpers";
import "./styles.css";
import ValidationError from "../../components/ValidationErrror";

const Form: React.FC<FormPropsType> = ({ fieldsData }) => {
  const initialFormData = transformDataIntoFormField(fieldsData);
  const [formData, updateFormData] = React.useState<TransformedDataType>(initialFormData);
  const [formErrors, setFormErrors] = React.useState<ValidationErrorType[][]>([]);
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    const errs = validateForm();
    const checkErrors = errs.filter(err => err.length !== 0)
    setFormErrors(errs);

    if (checkErrors.length === 0) {
      setIsSubmitting(true);
    }
    else
      console.log("not submitting");
  }

  const validateForm = () => {
    const errs = Object.keys(formData).map(key => {
      const fieldToValidate = fieldsData?.filter(field => key === field.name)[0];
      if (fieldToValidate) {
        const fieldValidationErrors = validateFormField({ ...fieldToValidate, value: formData[key] });
        return fieldValidationErrors;
      }
      else return [];
    });
    return errs;
  }

  const handleOnChange = (e: any) => {
    if (formData)
      updateFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
  }

  const fields = fieldsData && fieldsData.map((field, index) =>
    <Input
      key={index.toString()}
      {...field}
    />);

  const formProps = {
    ...defaultProps,
    onSubmit: handleOnSubmit,
    onChange: handleOnChange
  }

  return (
    <form className="vibrantForm" {...formProps}>
      {formErrors && formErrors.map((errors, index) => <ValidationError key={index.toString()} errors={errors} />)}
      {fields}
      <Submit isSubmitting={isSubmitting} />
    </form >
  );
}

export default Form;