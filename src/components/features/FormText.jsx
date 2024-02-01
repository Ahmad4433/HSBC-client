import React from "react";
import { ErrorMessage, useField } from "formik";

const FormText = ({ label, className, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className={`formtext-container formtext-container_${className}`}>
      <label htmlFor={field.name}>{label}</label>
      <textarea
        placeholder={props.place}
        name="message"
        {...field}
        {...props}
        autoComplete="off"

        id={`${meta.touched && meta.error && className+"-is-invalid"}`}
      />
      <ErrorMessage component="div" name={field.name} />
    </div>
  );
};

export default FormText;
