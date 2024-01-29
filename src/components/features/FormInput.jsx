import React from "react";
import { ErrorMessage, useField } from "formik";
import { useState } from "react";
const FormInput = ({ label, place, className, ...props }) => {
  const [field, meta] = useField(props);
  const [value, setValue] = useState("");
  return (
    <>
      <div className={`forminput-container forminput-container_${className}`}>
        {/* <div style={{ position: "relative", zIndex: "2" }}> */}
        <label
          htmlFor={field.name}
          className={`form-label ${value !== "" && "form-label-input-value"}`}
        >
          {label}
        </label>
        <input
          placeholder={place}
          type="text"
          {...field}
          {...props}
          autoComplete="off"
          id={`${meta.touched && meta.error && "is-invalid"}`}
          onChangeCapture={(e) => setValue(e.target.value)}
        />
        {/* </div> */}

        <ErrorMessage component="div" name={field.name} />
      </div>
    </>
  );
};

export default FormInput;
