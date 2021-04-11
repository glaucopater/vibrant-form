
import React from "react";
import { dictionary } from "../../dictionary";
import "./styles.css";

const Submit: React.FC<{ isSubmitting?: boolean }> = ({ isSubmitting }) => {
    return (
        <div className="vibrantFormActions">
            <input className={`vibrantFormSubmitButton${isSubmitting ? " submitting" : ""}`}
                type="submit"
                value={isSubmitting ? dictionary.sendingData : dictionary.submit}
                disabled={isSubmitting}
            />
        </div>
    );
}

export default Submit;



