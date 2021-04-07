
import React from "react";
import { FormFieldType } from "../../containers/Form/types";
import "./styles.css";

const LabelValue: React.FC<FormFieldType> = ({ label, value }) => {
    const [stateLabelValue] = React.useState<FormFieldType>({ label, value });

    return (
        <div className="vibrantFormLabelValue">
            <label className="vibrantFormLabel">{stateLabelValue.label}</label>
            <input className="vibrantFormInput" type="text" defaultValue={stateLabelValue.value} />
        </div>
    );
}

export default LabelValue;