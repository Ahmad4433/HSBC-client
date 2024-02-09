import React, { useEffect, useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import style from "./loginForm.module.css";
import loginimagr from "../../assets/loginimage.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import httpAction from "../../../store/actions/httpAction";
import urlList from "../../../store/utils/urlList";
import { CircularProgress, Snackbar, Alert } from "@mui/material";
import { uiActions } from "../../../store/slices/ui-slice";
import { loginActions } from "../../../store/slices/login-slice";
import { BsFillCalendarFill } from "react-icons/bs";
import { RiDashboardFill } from "react-icons/ri";
import calendar from "../../assets/calendar.png";
import duplicate from "../../assets/duplicate.png";
import loginbg from "../../assets/loginbg.png";
import usercircular from "../../assets/user-circle.png";
import thumb from "../../assets/thumb.png";
import blur from "../../assets/blur.png";
import { Switch } from "@mui/material";

const LoginForm = () => {
  const [res, setRes] = useState();
  const dispatch = useDispatch();
  const list = urlList();
  const isLoading = useSelector((state) => state.ui.loading);
  const error = useSelector((state) => state.ui.error);
  const navigate = useNavigate();

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
    setRes(result);
  };

  useEffect(() => {
    if (res) {
      localStorage.setItem("accToken", res.token.accessToken);
      localStorage.setItem("refToken", res.token.refreshToken);
      localStorage.setItem("userName", res.userInfo.userName);
      localStorage.setItem("userCode", res.userInfo.role);
      dispatch(loginActions.loginStatus(true));
      if (res.userInfo.role === 1) {
        navigate("/admin/dashboard");
        dispatch(loginActions.setUserCode(1));
      }
      if (res.userInfo.role === 2) {
        navigate("/");
        dispatch(loginActions.setUserCode(2));
      }
    }
  }, [res]);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div className={style.container} >
      <div className={style.main}>
      {isLoading && (
        <div className={style.model}>
          <CircularProgress color="secondary" />
        </div>
      )}

      <div className={style.bgHeader}>
        <div>
          <h2 className={style.logoT}>HSBC</h2>
        </div>
        <div className={style.bgInner}>
          <div>
            <RiDashboardFill className={style.dashIcon} />
            <p className={style.tt}>Dashboard</p>
          </div>
          <div>
            <img src={usercircular} className={style.iconImg} />
            <p className={style.tt}>Profile</p>
          </div>
          <div>
            <img src={duplicate} className={style.iconImg} />
            <p className={style.tt}>Sign Up</p>
          </div>
          <div>
            <img src={calendar} className={style.iconImg} />
            <p className={style.tt}>Login</p>
          </div>
        </div>
        <div>
          <p className={style.download}>FREE DOWNLOAD</p>
        </div>
      </div>

      <div className={style.section}>
        <div className={style.card}>
          <div className={style.navigate}>
            <p>Already have an account?</p>
            <Link to={"/signup"}>Sign up!</Link>
          </div>
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

              <div className={style.remind}>
                <Switch size="small" />
                <span className={style.rTitle}>Remember me</span>
                <span className={style.recov}>Recover Password</span>
              </div>

              <div onClick={btnHadler} className={style.action}>
                <button ref={btnRef} className={style.button} type="submit">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className={style.item2}>
          <div className={style.blurP}>
            <div className={style.green} ><img src={thumb} /> <span  >Top Notch Stock Resources</span></div>
            <p className={style.stock} >
              Today, we create innovative solutions to the challenges that
              consumers face in both their everyday lives and events.
            </p>
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
    </div>
  );
};

export default LoginForm;
