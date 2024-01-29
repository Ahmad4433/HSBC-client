import React from "react";
import { Formik, Form } from "formik";
import { FormInput, FormText } from "../../features";
import { getSupportValidations } from "../../../data/validations/getSupportValidation";
import { getSupportBanner } from "../../../assets/user/investmentAccount";
import { Button } from "../../common";

const GetSupport = () => {
  return (
    <>
      <div className="getSupport">
        <div className="getSupport-container">
          <div className="getSupport-container-image">
            <div
              className="getSupport-container-image-container"
              style={{ backgroundImage: `url(${getSupportBanner})` }}
            >
              <div>
                <h1>Get Support</h1>
                <p>We will call you back</p>
                <h2>8 800 3254486</h2>
                <button>Start chat</button>
              </div>
            </div>
          </div>
          <div className="getSupport-container-form">
            <h1>Get Support</h1>
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                city: "",
                country: "",
                phone: "",
                description: "",
              }}
              validateOnMount
              validationSchema={getSupportValidations}
              onSubmit={(values, { resetForm }) => {
                console.log(values);
                resetForm({ values: "" });
              }}
            >
              {(formik) => (
                <Form>
                  <div className="getSupport-container-form-feilds">
                    <div>
                      <FormInput
                        name="firstName"
                        label="First Name"
                        place="Enter first name"
                        type="string"
                        className="primary"
                      />
                      <FormInput
                        className="primary"
                        name="lastName"
                        label="Last Name"
                        place="Enter last name"
                        type="string"
                      />
                    </div>
                    <div>
                      <FormInput
                        className="primary"
                        name="country"
                        label="Country"
                        place="Enter country name"
                        type="string"
                      />
                      <FormInput
                        className="primary"
                        name="city"
                        label="City"
                        place="Enter city name"
                        type="string"
                      />
                    </div>
                    <div>
                      <FormText
                        name="description"
                        label="Description"
                        place="Enter description"
                        type="string"
                        className="primary"
                      />
                      <FormInput
                        className="primary"
                        name="phone"
                        label="Phone"
                        place="Enter phone number"
                        type="number"
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

export default GetSupport;
