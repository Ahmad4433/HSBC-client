import React, { useEffect, useState } from "react";
import style from "./verification.module.css";
import { useLocation,Link } from "react-router-dom";
import httpAction from "../../../store/actions/httpAction";
import urlList from "../../../store/utils/urlList";
import { useDispatch, useSelector } from "react-redux";
import { Snackbar, Alert, CircularProgress } from "@mui/material";
import { uiActions } from "../../../store/slices/ui-slice";
const VerificationPage = () => {
    const [rest,setRest] = useState(null)
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const isLoading = useSelector((state) => state.ui.loading);
  const error = useSelector((state) => state.ui.error);
  const list = urlList();
  const dispatch = useDispatch();
  const key = searchParams.get("link");

  const data = {
    url: list.verifyUser,
    method: "POST",
    body: { token: key },
  };

  const verifyUser = async () => {
    const result = await dispatch(httpAction(data));
    console.log(result);
    setRest(result?.message)
  };

  useEffect(() => {
    verifyUser();
  }, [dispatch]);


  const errorHandler = ()=>{
    dispatch(uiActions.showError(null))
  }

  return (
    <div className={style.main}>
      <div className={style.section}>
        {isLoading && (
          <div className={style.loadingSec}>
            <CircularProgress />
            <h2>please wait for a while....</h2>
          </div>
        )}
      </div>
      {!isLoading && !error && <div className={style.message} >
        <h1 className={style.title} > <span>Thanks!</span> Your account has been verified </h1>
            <Link to='/login' >go to login</Link>
        </div>}
      {!isLoading && error && <div className={style.message} >
        <h1 className={style.title} > <span>Opps!</span>  Nothing to found.</h1>
            <Link onClick={errorHandler} to='/' >go to sign up</Link>
        </div>}
    </div>
  );
};

export default VerificationPage;
