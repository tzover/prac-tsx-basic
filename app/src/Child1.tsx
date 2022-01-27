import React, { memo } from "react";

export const Child1 = memo((props) => {
    console.log("children");
    const { open, onClickClose } = props;
    return (
        <div>
            {open ? (
                <div>
                    <p>children</p>
                    <button type="button" onClick={onClickClose}>
                        *****
                    </button>
                </div>
            ) : null}
        </div>
    );
});
