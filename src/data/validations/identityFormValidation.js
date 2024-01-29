import * as Yup from "yup";

export const identityFormValidation = Yup.object({
  firstName: Yup.string()
    .min(2, "Must be 2 characters")
    .max(30, "Must be 30 characters or less")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Must be 2 characters")
    .max(30, "Must be 30 characters or less")
    .required("Required"),

  email1: Yup.string().email("Invalid email address").required("Required"),
  email2: Yup.string()
    .email("Invalid email address")
    .required("Required")
    .notOneOf([Yup.ref("email1")], "Email addresses must be different"),

  phone1: Yup.string()
    .matches(/^[0-9]+$/, "Must be numeric")
    .min(5, "Too short, minimum 5 characters")
    .max(15, "Too long, maximum 15 characters")
    .required("Required"),
  phone2: Yup.string()
    .matches(/^[0-9]+$/, "Must be numeric")
    .min(5, "Too short, minimum 5 characters")
    .max(15, "Too long, maximum 15 characters")
    .notOneOf([Yup.ref("phone1")], "Phone numbers must be different")
    .required("Required"),
  phone3: Yup.string()
    .matches(/^[0-9]+$/, "Must be numeric")
    .min(5, "Too short, minimum 5 characters")
    .max(15, "Too long, maximum 15 characters")
    .notOneOf(
      [Yup.ref("phone1"), Yup.ref("phone2")],
      "Phone numbers must be different"
    )
    .required("Required"),

  address: Yup.string()
    .min(2, "Must be 2 characters")
    .max(30, "Must be 30 characters or less")
    .required("Required"),
  city: Yup.string()
    .min(2, "Must be 2 characters")
    .max(30, "Must be 30 characters or less")
    .required("Required"),
  country: Yup.string()
    .min(2, "Must be 2 characters")
    .max(30, "Must be 30 characters or less")
    .required("Required"),

  date: Yup.date().typeError("Invalid date format").required("Required"),
  postCode: Yup.string()
    .min(5, "Must be 5 characters")
    .max(250, "Must be 250 characters or less")
    .required("Required"),
});
