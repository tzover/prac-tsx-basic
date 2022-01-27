import React from "react";
import { useHistory, useLocation } from "react-router-dom";

export const Page3 = () => {
    const location = useLocation();
    const { state } = useLocation();
    console.log(location);
    console.log(state);
    const history = useHistory();
    const onClickBack = () => history.goBack();
    return (
        <div>
            {state ? <p>true</p> : <p>falseです</p>}
            page3
            <div>aaaa</div>
            <button type="button" onClick={onClickBack}>
                Back
            </button>
        </div>
    );
};
