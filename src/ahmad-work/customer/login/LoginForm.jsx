import React, { useEffect, useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import style from "./loginForm.module.css";
import loginimagr from "../../assets/loginimage.jpg";
import { Link,useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import httpAction from "../../../store/actions/httpAction";
import urlList from "../../../store/utils/urlList";
import { CircularProgress, Snackbar, Alert } from "@mui/material";
import { uiActions } from "../../../store/slices/ui-slice";
import {loginActions} from '../../../store/slices/login-slice'

const LoginForm = () => {
  const[res,setRes] = useState()
  const dispatch = useDispatch();
  const list = urlList();
  const isLoading = useSelector((state) => state.ui.loading);
  const error = useSelector((state) => state.ui.error);
  const navigate = useNavigate()

  const btnRef = useRef();
  const initialValues = {
    email: "",
    password: "",
  };

  const btnHadler = () => {
    btnRef.current.click();
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Required"),
  });

  const onSubmit = async (values) => {
    // login logic here
    const data = {
      url: list.loginUser,
      method: "POST",
      body: { email: values.email, password: values.password },
    };

    const result = await dispatch(httpAction(data));
    setRes(result)
   
  };

useEffect(()=>{

  if (res) {
    localStorage.setItem("accToken", res.token.accessToken);
    localStorage.setItem("refToken", res.token.refreshToken);
    localStorage.setItem("userName", res.userInfo.userName);
    localStorage.setItem('userCode',res.userInfo.role)
    dispatch(loginActions.loginStatus(true))
    if(res.userInfo.role===1){
      navigate('/admin/dashboard')
      dispatch(loginActions.setUserCode(1))

    }
    if(res.userInfo.role===2){

      navigate('/')
      dispatch(loginActions.setUserCode(2))

    }
   
    
   
  }



},[res])

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div className={style.main}>
      {isLoading && (
        <div className={style.model}>
          <CircularProgress color="secondary" />
        </div>
      )}
      <div className={style.section}>
        <div className={style.navigate}>
          <p>Already have an account?</p>
          <Link to={"/signup"}>Sign up!</Link>
        </div>
        <div className={style.card}>
          <div className={style.item1}>
            <p className={style.greating}>Welcome Back</p>
            <p className={style.loginTitle}>Login into your account</p>
            <form onSubmit={formik.handleSubmit}>
              <div className={style.formG}>
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className={`${style.input} ${
                      formik.touched.email && formik.errors.email
                        ? style.error
                        : ""
                    }`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className={style.errorText}>{formik.errors.email}</div>
                  )}
                </div>

                <div>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    className={`${style.input} ${
                      formik.touched.password && formik.errors.password
                        ? style.error
                        : ""
                    }`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />
                  {formik.touched.password && formik.errors.password && (
                    <div className={style.errorText}>
                      {formik.errors.password}
                    </div>
                  )}
                </div>
              </div>

              <div onClick={btnHadler} className={style.action}>
                <button ref={btnRef} className={style.button} type="submit">
                  Login
                </button>
              </div>
            </form>
          </div>
          <div className={style.item2}>
            <div className={style.image}>
              <img src={loginimagr} alt="Login" className={style.img} />
            </div>
          </div>
        </div>
      </div>

      <Snackbar
        open={error}
        onClose={() => dispatch(uiActions.showError(null))}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          open={error}
          severity="error"
          onClose={() => dispatch(uiActions.showError(null))}
        >
          {<div className={style.httpErr}>{error}</div>}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default LoginForm;
