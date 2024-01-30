import React from "react";
import { Formik, Form } from "formik";
import { FormInput } from "../../components/features";
import { Button } from "../../components/common";
// validation
import { bankInformationValidations } from "../../data/validations/bankInformationValidation";
// Icons
import { BsBank } from "react-icons/bs";
import { MdConfirmationNumber } from "react-icons/md";
import { TbCircleLetterI } from "react-icons/tb";

const BankInformation = () => {
  return (
    <>
      <div className="bankInformation">
        <div className="bankInformation-container">
          <center>
            <h1>Bank Information</h1>
          </center>
          <div className="bankInformation-container-form">
            <Formik
              initialValues={{
                bankName: "",
                ibnNumber: "",
                swift: "",
              }}
              validateOnMount
              validationSchema={bankInformationValidations}
              onSubmit={(values, { resetForm }) => {
                console.log(values);
                resetForm({ values: "" });
              }}
            >
              {(formik) => (
                <Form>
                  <div className="bankInformation-container-form-feilds">
                    <FormInput
                      name="bankName"
                      label="Bank Name"
                      place="Type here..."
                      type="string"
                      className="secondry"
                      icon={true}
                      iconPath={<BsBank />}
                    />
                    <br />
                    <FormInput
                      name="ibnNumber"
                      label="iBAN"
                      place="Type here..."
                      type="string"
                      className="secondry"
                      icon={true}
                      iconPath={<MdConfirmationNumber />}
                    />
                    <br />
                    <FormInput
                      name="swift"
                      label="SWIFT/BIC:"
                      place="Type here..."
                      type="string"
                      className="secondry"
                      icon={true}
                      iconPath={<TbCircleLetterI />}
                    />
                  </div>
                  <div className="getSupport-container-form-button">
                    <center>
                      <Button className="secondry">Confirm</Button>
                    </center>
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

export default BankInformation;
