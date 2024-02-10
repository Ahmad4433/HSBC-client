import React, { useEffect, useRef, useState } from "react";


// login form component
import Loading from "../../ui-components/loading-spinner/Loading";
import FormHeader from "./form-header/FormHeader";
import FormNavigator from "./form-navigator/FormNavigator";
import FormControl from "./form-controlls/FormControl";
import FormFooter from "./form-footer/FormFooter";
import InfoMessage from "../../ui-components/snackbar/InfoMessage";


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
  <div className={style.main} >
<div className={style.background} >
<FormHeader/>

</div>


  </div>
  );
};

export default LoginForm;
