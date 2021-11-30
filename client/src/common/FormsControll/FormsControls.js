import React from "react";
import s from "./FormsControls.module.css";

export const Input = ({input, meta, ...props}) => {
    // debugger;

    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")} >
                <input {...input} {...props} />
            {hasError && <span>{meta.error}</span>}
        </div>
    );
};