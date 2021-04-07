
import { FormFieldType } from "../Vibrant/types";
import "./styles.css";

const LabelValue: React.FC<FormFieldType> = ({ label, value }) => {
    return (
        <div className="vibrantFormLabelValue">
            <label className="vibrantFormLabel">{label}</label>
            <input className="vibrantFormInput" type="text" defaultValue={value} />
        </div>
    );
}

export default LabelValue;