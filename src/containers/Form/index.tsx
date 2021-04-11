import React, { FormEvent } from "react";
import Submit from "../../components/Submit";
import settings from "../../settings";
import { transformDataIntoFormField, validateForm } from "../../helpers";
import { FormPropsType, TransformedDataType, ValidationErrorType } from "../../types";
import InputFields from "../../components/InputFields";
import "./styles.css";


const Form: React.FC<FormPropsType> = ({ fieldsData }) => {
  const initialFormData = transformDataIntoFormField(fieldsData);
  const [formData, updateFormData] = React.useState<TransformedDataType>(initialFormData);
  const [formErrors, setFormErrors] = React.useState<ValidationErrorType[]>([]);
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);

  const sendData = () => {
    if (settings.action === "")
      setTimeout(() => {
        setIsSubmitting(false);
      }, 3000);
    else {
      const requestOptions = {
        method: settings.method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      };
      fetch(settings.action, requestOptions)
        .then(response => console.log('Submitted successfully: ', response))
        .catch(error => console.log('Form submit error', error))
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
        <InputFields
          fieldsData={fieldsData}
          formErrors={formErrors}
        // component={CustomInput}
        />
        <Submit isSubmitting={isSubmitting} />
      </form>
    </section>
  );
}

export default Form;