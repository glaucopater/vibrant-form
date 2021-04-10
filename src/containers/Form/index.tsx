import React, { FormEvent } from "react";
import Submit from "../../components/Submit";
import settings from "../../settings";
import { transformDataIntoFormField, validateForm } from "../../helpers";
import ValidationError from "../../components/ValidationErrror";
import { FormPropsType, TransformedDataType, ValidationErrorType } from "../../types";
import InputFields from "../../components/InputFields";
import "./styles.css";
import Errors from "../../components/Errors";

const Form: React.FC<FormPropsType> = ({ fieldsData }) => {
  const initialFormData = transformDataIntoFormField(fieldsData);
  const [formData, updateFormData] = React.useState<TransformedDataType>(initialFormData);
  const [formErrors, setFormErrors] = React.useState<ValidationErrorType[][]>([]);
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errs = validateForm(formData, fieldsData);
    const checkErrors = errs.filter(err => err.length !== 0)
    setFormErrors(errs);

    if (checkErrors.length === 0) {
      setIsSubmitting(true);
    }
    else
      console.log("not submitting");
  }

  const handleOnChange = (e: FormEvent<HTMLFormElement>) => {
    if (formData)
      updateFormData({
        ...formData,
        [e.currentTarget.name]: e.currentTarget.value
      });
  }

  const formProps = {
    ...settings,
    onSubmit: handleOnSubmit,
    onChange: handleOnChange
  }

  return (
    <form className="vibrantForm" {...formProps}>
      <Errors formErrors={formErrors} />
      <InputFields fieldsData={fieldsData} />
      <Submit isSubmitting={isSubmitting} />
    </form >
  );
}

export default Form;