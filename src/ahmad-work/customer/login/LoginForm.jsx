import React, { useRef } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import style from './loginForm.module.css';
import loginimagr from '../../assets/loginimage.jpg';

const LoginForm = () => {
    const btnRef = useRef()
  const initialValues = {
    email: '',
    password: '',
  };

const btnHadler = ()=>{
    btnRef.current.click()

}



  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Required'),
  });

  const onSubmit = (values) => {
    // Your login logic here
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div className={style.main}>
      <div className={style.section}>
        <div className={style.card}>
          <div className={style.item1}>
            <p className={style.greating}>Welcome Back</p>
            <p className={style.loginTitle}>Login into your account</p>
            <form onSubmit={formik.handleSubmit}>
            
    <div className={style.formG} > 
    <div>
    <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className={`${style.input} ${formik.touched.email && formik.errors.email ? style.error : ''}`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email && <div className={style.errorText}>{formik.errors.email}</div>}
    </div>

            <div>
            <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className={`${style.input} ${formik.touched.password && formik.errors.password ? style.error : ''}`}
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
                <button ref={btnRef} className={style.button} type="submit">Login</button>
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
    </div>
  );
};

export default LoginForm;
