import React,{useState,useEffect,useRef} from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import httpAction from '../../../../store/actions/httpAction';
import urlList from '../../../../store/utils/urlList';
import Loading from '../../../ui-components/loading-spinner/Loading';
import InfoMessage from '../../../ui-components/snackbar/InfoMessage';
import style from './signupFormcontroll.module.css'

const SignupFormControll = () => {


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
        {isLoading && <Loading/>}
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
                formik.touched.email && formik.errors.email ? style.error : ""
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
              <div className={style.errorText}>{formik.errors.password}</div>
            )}
          </div>
        </div>

           <div onClick={btnHadler} className={style.action}>
          <button ref={btnRef} className={style.button} type="submit">
            Sign Up
          </button>
        </div>
      </form>
      <InfoMessage error={error} />
    </div>
  )
}

export default SignupFormControll
