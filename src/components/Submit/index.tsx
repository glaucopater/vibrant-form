
import React from "react";
import { dictionary } from "../../dictionary";
import "./styles.css";

const Submit: React.FC<{ isSubmitting: boolean }> = ({ isSubmitting }) => {
    return (
        <div className="vibrantFormActions">
            {isSubmitting && <span>Sending data...</span>}
            {!isSubmitting && <input className="vibrantFormSubmitButton" type="submit" value={dictionary.submit} disabled={isSubmitting} />}
        </div>
    );
}

export default Submit;



