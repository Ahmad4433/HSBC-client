import * as Yup from "yup";

export const getSupportValidations = Yup.object({
  firstName: Yup.string()
    .min(2, "Must be 2 characters")
    .max(30, "Must be 30 characters or less")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Must be 2 characters")
    .max(30, "Must be 30 characters or less")
    .required("Required"),
  country: Yup.string()
    .min(2, "Must be 2 characters")
    .max(30, "Must be 30 characters or less")
    .required("Required"),
  city: Yup.string()
    .min(2, "Must be 2 characters")
    .max(30, "Must be 30 characters or less")
    .required("Required"),
  phone: Yup.string()
    .matches(/^\d{6,15}$/, "Invalid phone number")
    .required("Required")
    .min(6, "Must be at least 6 digits")
    .max(15, "Cannot exceed 15 digits"),
  description: Yup.string()
    .min(5, "Must be 5 characters")
    .max(250, "Must be 250 characters or less")
    .required("Required"),
});
