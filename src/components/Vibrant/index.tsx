import React from "react";
import LabelValue from "../LabelValue";
import { FormPropsType } from "./types";
import "./styles.css";

const VibrantForm: React.FC<FormPropsType> = ({ fields }) => {
  return (
    <form className="vibrantForm">
      {fields && fields.map((field, index) => <LabelValue key={index.toString()} {...field} />)}
    </form>
  );
}

export default VibrantForm;