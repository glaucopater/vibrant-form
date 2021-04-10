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


  const sendData = () => {
    const timeout = setTimeout(() => {
      setIsSubmitting(false);
    }, 3000);
  }

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errs = validateForm(formData, fieldsData);
    const checkErrors = errs.filter(err => err.length !== 0)
    setFormErrors(errs);

    if (checkErrors.length === 0) {
      setIsSubmitting(true);
      sendData();
    }
    else
      console.log("not submitting");
  }

  const handleOnChange = (e: any) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const formProps = {
    ...settings,
    onSubmit: handleOnSubmit,
    onChange: handleOnChange
  }

  return (
    <section className="vibrantFormContainer">
      <form className="vibrantForm" {...formProps}>
        <InputFields fieldsData={fieldsData} />
        <Submit isSubmitting={isSubmitting} />
      </form>
      <Errors formErrors={formErrors} />
    </section>
  );
}

export default Form;