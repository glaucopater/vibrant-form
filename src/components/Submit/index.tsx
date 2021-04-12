
import React from "react";
import { dictionary } from "../../dictionary";
import "./styles.css";

const Submit: React.FC<{ isSubmitting?: boolean, withTheme?: boolean }> = ({ isSubmitting, withTheme }) => {
    return (
        <div className={withTheme ? "vibrantFormActions" : ""}>
            <input className={withTheme ? `vibrantFormSubmitButton${isSubmitting ? " submitting" : ""}` : ""}
                type="submit"
                value={isSubmitting ? dictionary.sendingData : dictionary.submit}
                disabled={isSubmitting}
            />
        </div>
    );
}

export default Submit;



