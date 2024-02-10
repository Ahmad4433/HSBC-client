import React, { useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import style from "./signup.module.css";
import loginimagr from "../../assets/loginimage.jpg";
import { useDispatch, useSelector } from "react-redux";
import httpAction from "../../../store/actions/httpAction";
import urlList from "../../../store/utils/urlList";
import { Link } from "react-router-dom";
import { CircularProgress, Snackbar, Alert } from "@mui/material";
import { uiActions } from "../../../store/slices/ui-slice";


import SignupFormControll from "./form-contoll-signup/SignupFormControll";
import Alternative from "../login/login-alternative/Alternative";
import FormHeader from "../login/form-header/FormHeader";
import FormFooter from "../login/form-footer/FormFooter";
import FormNavigator from "../login/form-navigator/FormNavigator";
import thumb from '../../assets/thumb.png'
const Signup = () => {
  const list = urlList();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.ui.loading);
  const error = useSelector((state) => state.ui.error);
  const [test, setTest] = useState(null);
  const btnRef = useRef();
  const initialValues = {
    email: "",
    password: "",
    name: "",
  };

  const btnHadler = () => {
    btnRef.current.click();
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Required"),
    name: Yup.string().required("Required"),
  });

  const onSubmit = async (values) => {
    // Your login logic here
    const data = {
      url: list.signupUser,
      method: "POST",
      body: {
        name: values.name,
        email: values.email,
        password: values.password,
      },
    };
    const result = await dispatch(httpAction(data));
    setTest(result?.message);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });


  const closeHandler = ()=>{
    setTest(null)
    dispatch(uiActions.showError(null))
  }

  return (
   <div className={style.main} >

<div className={style.background}>
        <FormHeader />

        <div className={style.form}>
          <div className={style.formItems}>
            <div className={style.item1}>
              <div className={style.navigator}>
                <FormNavigator link='login' title='Login' title2='Have already account ' />
              </div>
              <div className={style.titles}>
                <p className={style.t1}>Welcome</p>
                <p className={style.t2}>Continue with</p>
              </div>
              <div className={style.alternative}>
                <Alternative />
              </div>
              <div className={style.bars}>
                <div className={style.bar}></div>
                <span>Or</span>
                <div className={style.bar}></div>
              </div>

              <div className={style.controll}>
              <SignupFormControll/>
              </div>
            </div>
            <div className={style.item2}>
              <div className={style.item2Inner}>
                <div className={style.thumb} >
                  <img src={thumb} />
                  <p>Top Notch Stock Resources</p>
                </div>
                <p className={style.detail}>
                  Today, we create innovative solutions to the challenges that
                  consumers face in both their everyday lives and events.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.footer} >
        <FormFooter/>
      </div>

   </div>
  );
};

export default Signup;







