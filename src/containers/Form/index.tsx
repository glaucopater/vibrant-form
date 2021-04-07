import React from "react";
import LabelValue from "../../components/LabelValue";
import { FormPropsType } from "./types";
import Submit from "../../components/Submit";
import { defaultProps } from "./settings";
import "./styles.css";

const Form: React.FC<FormPropsType> = ({ fieldsData }) => {
  const [state, setState] = React.useState<FormPropsType["fieldsData"]>(fieldsData);

  const fields = state ?
    state.map((field, index) => <LabelValue key={index.toString()} {...field} />)
    : null;

  return (
    <form className="vibrantForm" {...defaultProps}>
      {fields}
      <Submit />
    </form>
  );
}

export default Form;