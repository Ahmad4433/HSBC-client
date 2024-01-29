import React from "react";
import { Button } from "../../common";
import { Formik, Form } from "formik";
import { FormInput } from "../../features";
import { resetPasswordFormValidation } from "../../../data/validations/resetPassword";

const ResetPassword = () => {
  return (
    <>
      <div className="resetPassword">
        <div className="resetPassword-container">
          <h1>Change Your Password</h1>
          <div className="resetPassword-container-form">
            <Formik
              initialValues={{
                oldPassword: "",
                newPassword: "",
                confirmPassword: "",
              }}
              validateOnMount
              validationSchema={resetPasswordFormValidation}
              onSubmit={(values, { resetForm }) => {
                console.log(values);
                resetForm({ values: "" });
              }}
            >
              {(formik) => (
                <Form>
                  <div className="identityForm-container-form-feilds">
                    <div>
                      <FormInput
                        name="newPassword"
                        label="First Name"
                        place="Type here..."
                        type="string"
                        className="secondry"
                      />
                      <FormInput
                        className="secondry"
                        name="confirmPassword"
                        label="Last Name"
                        place="Type here..."
                        type="string"
                      />
                    </div>
                  </div>
                  <div className="getSupport-container-form-button">
                    <Button className="primary">Confirm</Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
