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
    <div className={style.main}>
      {isLoading && (
        <div className={style.model}>
          <CircularProgress color="secondary" />
        </div>
      )}

      <div className={style.section}>
        <div className={style.navigate}>
          <p>Don't have an account?</p>
          <Link to={"/"}>Login!</Link>
        </div>
        <div className={style.card}>
          <div className={style.item1}>
            <p className={style.greating}>Welcome To HSCB</p>
            <p className={style.loginTitle}>Sign up to continue</p>
            <form onSubmit={formik.handleSubmit}>
              <div className={style.formG}>
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    className={`${style.input} ${
                      formik.touched.name && formik.errors.name
                        ? style.error
                        : ""
                    }`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <div className={style.errorText}>{formik.errors.name}</div>
                  )}
                </div>
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
                  Sign up
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
        autoHideDuration={6000}
        open={test || error}
        onClose={closeHandler}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert variant="filled" severity={error ? 'warning' :"info"} onClose={closeHandler}>
          <div className={style.res}>{test || error}</div>
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Signup;
