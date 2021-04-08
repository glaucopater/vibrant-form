
import React from "react";
import { dictionary } from "../../dictionary";
import "./styles.css";

const Submit: React.FC = () => {
    return (
        <div className="vibrantFormActions">
            <input className="vibrantFormSubmitButton" type="submit" value={dictionary.submit} />
        </div>
    );
}

export default Submit;



