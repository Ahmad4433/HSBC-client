import React from "react";
import { Formik, Form } from "formik";
import { FormInput } from "../../features";
import { identityFormValidation } from "../../../data/validations/identityFormValidation";
import { Button } from "../../common";

// Icons
import { GoPerson } from "react-icons/go";
import { MdOutlineMailOutline } from "react-icons/md";
import { VscCallOutgoing } from "react-icons/vsc";
import { FiMapPin } from "react-icons/fi";

const IdentityForm = () => {
  return (
    <div className="identityForm">
      <div className="identityForm-container">
        <center>
          <h1>Identity & Contact</h1>
        </center>

        <div className="identityForm-container-form">
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email1: "",
              email2: "",
              phone1: "",
              phone2: "",
              phone3: "",
              address: "",
              city: "",
              country: "",
              date: "",
              postCode: "",
            }}
            validateOnMount
            validationSchema={identityFormValidation}
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
                      name="firstName"
                      label="First Name"
                      place="Type here..."
                      type="string"
                      className="secondry"
                      icon={true}
                      iconPath={<GoPerson />}
                    />
                    <FormInput
                      className="secondry"
                      name="lastName"
                      label="Last Name"
                      place="Type here..."
                      type="string"
                      icon={true}
                      iconPath={<GoPerson />}
                    />
                  </div>
                  <div>
                    <FormInput
                      className="secondry"
                      name="email1"
                      label="Email"
                      place="Type here..."
                      type="mail1"
                      icon={true}
                      iconPath={<MdOutlineMailOutline />}
                    />
                    <FormInput
                      className="secondry"
                      name="email2"
                      label="Other email"
                      place="Type here..."
                      type="mail2"
                      icon={true}
                      iconPath={<MdOutlineMailOutline />}
                    />
                  </div>
                  <div>
                    <FormInput
                      className="secondry"
                      name="phone1"
                      label="Phone"
                      place="Type here..."
                      type="number"
                      icon={true}
                      iconPath={<VscCallOutgoing />}
                    />
                    <FormInput
                      className="secondry"
                      name="phone2"
                      label="Adiditional Phone 1"
                      place="Type here..."
                      type="number"
                      icon={true}
                      iconPath={<VscCallOutgoing />}
                    />
                  </div>

                  <div>
                    <FormInput
                      className="secondry"
                      name="phone3"
                      label="Adiditional Phone 2"
                      place="Type here..."
                      type="number"
                      icon={true}
                      iconPath={<VscCallOutgoing />}
                    />
                    <FormInput
                      className="secondry"
                      name="address"
                      label="Address"
                      place="Type here..."
                      type="string"
                      icon={true}
                      iconPath={<FiMapPin />}
                    />
                  </div>

                  <div>
                    <FormInput
                      className="secondry"
                      name="country"
                      label="Country"
                      place="Type here..."
                      type="string"
                      icon={true}
                      iconPath={<FiMapPin />}
                    />
                    <FormInput
                      className="secondry"
                      name="city"
                      label="City"
                      place="Type here..."
                      type="string"
                      icon={true}
                      iconPath={<FiMapPin />}
                    />
                  </div>

                  <div>
                    <FormInput
                      className="secondry"
                      name="postCode"
                      label="Post Code"
                      place="Type here..."
                      type="string"
                      icon={true}
                      iconPath={<MdOutlineMailOutline />}
                    />
                    <FormInput
                      className="secondry"
                      name="date"
                      label="Birth Date"
                      place="Type here..."
                      type="date"
                      icon={true}
                      iconPath={<MdOutlineMailOutline />}
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
  );
};

export default IdentityForm;
