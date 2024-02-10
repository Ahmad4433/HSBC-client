import React, { useEffect, useRef, useState } from "react";

// login form component
import Loading from "../../ui-components/loading-spinner/Loading";
import FormHeader from "./form-header/FormHeader";
import FormNavigator from "./form-navigator/FormNavigator";
import FormControl from "./form-controlls/FormControl";
import FormFooter from "./form-footer/FormFooter";
import InfoMessage from "../../ui-components/snackbar/InfoMessage";
import Alternative from "./login-alternative/Alternative";

//images
import loginImage from "../../assets/loginimage.jpg";

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
import insta from "../../assets/insta.png";
import twitter from "../../assets/twitter.png";
import pin from "../../assets/pin.png";
import git from "../../assets/git.png";
import xbox from "../../assets/xbox.png";




const LoginForm = () => {
  return (
    <div className={style.main}>

      <InfoMessage/>
      <div className={style.background}>
        <FormHeader />

        <div className={style.form}>
          <div className={style.formItems}>
            <div className={style.item1}>
              <div className={style.navigator}>
                <FormNavigator link='signup' title='Sign Up' title2='Dont have an account' />
              </div>
              <div className={style.titles}>
                <p className={style.t1}>Welcome Back</p>
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
                <FormControl />
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

export default LoginForm;
