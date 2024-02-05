import React from "react";
import style from "./comment.module.css";
const Comment = () => {
  return (
    <div className={style.main}>
      <div className={style.card}>
        <p className={style.title}>Add a Comment</p>
        <textarea cols={30} rows={5} className={style.comment} />
        <div className={style.section}>
          <div>
    
            <input type="radio" />
            <label>Phone Apoitment</label>
          </div>
          <div>
    
            <input type="radio" />
            <label>Phone Apoitment</label>
          </div>
        </div>

        <div className={style.action} >
            <button className={style.btn} >Add</button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
