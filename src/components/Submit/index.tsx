
import React from "react";
import { dictionary } from "../../dictionary";
import { getClassNameProps } from "../../helpers";
import "./styles.css";

const Submit: React.FC<{ isSubmitting?: boolean, withTheme?: boolean }> = ({ isSubmitting, withTheme }) => {
    return (
        <div {...getClassNameProps("vibrantFormActions", withTheme)}>
            <input
                {...getClassNameProps(`vibrantFormSubmitButton${isSubmitting ? " submitting" : ""}`, withTheme)}
                type="submit"
                value={isSubmitting ? dictionary.sendingData : dictionary.submit}
                disabled={isSubmitting}
            />
        </div>
    );
}

export default Submit;



