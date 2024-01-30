import * as Yup from "yup";

export const bankInformationValidations = Yup.object({
  bankName: Yup.string()
    .min(2, "Must be 2 characters")
    .max(30, "Must be 30 characters or less")
    .required("Required"),
  ibn: Yup.string()
    .min(2, "Must be 2 characters")
    .max(30, "Must be 30 characters or less")
    .required("Required"),
  swift: Yup.string()
    .min(2, "Must be 2 characters")
    .max(30, "Must be 30 characters or less")
    .required("Required"),
});
