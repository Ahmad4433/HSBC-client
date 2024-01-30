import * as Yup from "yup";


// resetpassword

export const resetPasswordFormValidation = Yup.object({
  oldPassword: Yup.string().required("Old password is required"),
  newPassword: Yup.string()
    .notOneOf(
      [Yup.ref("oldPassword")],
      "New password must be different from old password"
    )
    .required("New password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword")], "Passwords must match")
    .required("Confirm password is required"),
});
