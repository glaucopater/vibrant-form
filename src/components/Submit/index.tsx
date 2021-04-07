
import React from "react";
import { validateFormField } from "../../containers/Form/helpers";
import { strings } from "../../containers/Form/strings";
import "./styles.css";

const Submit: React.FC = () => {

    const handleOnSubmit = (e: any) => {
        e.preventDefault();
        console.log(e.target);
        return false;
        // validateFormField();

    }


    return (
        <div className="vibrantFormActions">
            <input className="vibrantFormSubmitButton" onSubmit={handleOnSubmit} type="submit" value={strings.submit} />
        </div>
    );
}

export default Submit;



