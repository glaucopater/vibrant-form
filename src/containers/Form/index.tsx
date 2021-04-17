import React, { FormEvent } from "react";
import Submit from "../../components/Submit";
import { getClassNameProps, isNullOrEmpty, transformDataIntoFormField, validateForm } from "../../helpers";
import { FormPropsType, TransformedDataType, FormOnChangeEventType, ValidationErrorType } from "../../types";
import InputFields from "../InputFields";
import { dictionary } from "../../dictionary";
import "./styles.css";


const Form: React.FC<FormPropsType> = ({ fieldsData, action, method, withTheme, component: CustomInput }) => {
  const initialFormData = transformDataIntoFormField(fieldsData);
  const [formData, updateFormData] = React.useState<TransformedDataType>(initialFormData);
  const [formErrors, setFormErrors] = React.useState<ValidationErrorType[]>();
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>();

  const sendData = () => {
    if (isNullOrEmpty(action))
      setTimeout(() => {
        setIsSubmitting(false);
      }, 3000);
    else {
      const requestOptions = {
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      };
      if (action)
        fetch(action, requestOptions)
          .then(response => console.log(dictionary.dataSent, response))
          .catch(error => console.log('Server error: ', error))
          .finally(() => setIsSubmitting(false))
    }
  }

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errs = validateForm(formData, fieldsData);
    setFormErrors(errs);
    if (errs.length === 0) {
      setIsSubmitting(true);
      sendData();
    }
  }

  const handleOnChange = (e: FormOnChangeEventType) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const formProps = {
    action, method,
    onSubmit: handleOnSubmit,
    onChange: handleOnChange
  }

  return (
    <section
      {...getClassNameProps("vibrantFormContainer", withTheme)}>
      <form
        {...getClassNameProps("vibrantForm", withTheme)}
        {...formProps}>
        <InputFields
          fieldsData={fieldsData}
          formErrors={formErrors}
          withTheme={withTheme}
          component={CustomInput}
        />
        {isSubmitting === false && <span>{dictionary.dataSent}</span>}
        <Submit isSubmitting={isSubmitting} withTheme={withTheme} />
      </form>
    </section >
  );
}

export default Form;