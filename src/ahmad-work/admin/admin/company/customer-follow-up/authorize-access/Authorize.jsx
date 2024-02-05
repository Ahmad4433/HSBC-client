import React from "react";
import style from "./authorize.module.css";
const Authorize = () => {
  return (
    <div className={style.main}>
      <div className={style.card}>
        <p className={style.title}>Authorize access to the website</p>
        <p className={style.detail} >
          By default, visitors do not see the website.Click the button above to
          send a customer a welcome message with an encrypted link to view the
          website.
        </p>
        <div className={style.sections} >
            <p className={style.sec1} >
            Get an encrypted link to navigate the site
            </p>
            <p className={style.sec2} >Send a welcome link to view the website</p>
        </div>
      </div>
    </div>
  );
};

export default Authorize;
