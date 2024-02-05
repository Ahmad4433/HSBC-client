import React, { useRef } from "react";
import style from "./detail.module.css";
import { AiOutlineCamera } from "react-icons/ai";
const Detail = () => {
const fileref = useRef()


const pickHandler = ()=>{

    fileref.current.click()
}

  return (
    <div className={style.main}>
      <div className={style.card}>
        <p className={style.title}>Create A Multi-Stock</p>
        <div className={style.item1}>
          <label className={style.lbl}>Expert Name</label>
          <input type="text" placeholder="Find Value..." />
        </div>
        <div className={style.item2}>
          <label className={style.lbl}>City</label>
          <input type="text" placeholder="Type here..." />
        </div>
        <div className={style.item3}>
          <label className={style.lbl}>Short Description</label>
          <textarea cols={5} rows={5}  type="text" />
        </div>
        <div onClick={pickHandler} className={style.item4}>
          <label className={style.lbl} >Photo</label>
          <input ref={fileref} type="file" style={{ display: "none" }} />
          <div className={style.file}>
            <AiOutlineCamera className={style.camera} />
            <span className={style.select} >Add Picture</span>
          </div>
        </div>
        <div onClick={pickHandler} className={style.item4}>
          <label className={style.lbl} >Photo</label>
          <input ref={fileref} type="file" style={{ display: "none" }} />
          <div className={style.file}>
            <AiOutlineCamera className={style.camera} />
            <span className={style.select} >Add Picture</span>
          </div>
        </div>
        <div className={style.item2}>
          <label className={style.lbl}>Pack Tittle</label>
          <input type="text" placeholder="Type here..." />
        </div>
        <div className={style.item2}>
          <label className={style.lbl}>Pack Category</label>
          <input type="text" placeholder="Type here..." />
        </div>
        <p className={style.lognT} >Choose currencies and proportions in this pack</p>
        <div className={style.mega}>
          <div className={style.mega1}>
            <div className={style.item2}>
              <label className={style.lbl}>Chose The List</label>
              <input type="text" placeholder="Type here..." />
            </div>
            <div className={style.item2}>
              <label className={style.lbl}>Chose The Value</label>
              <input type="text" placeholder="Type here..." />
            </div>
          </div>
          <div className={style.mega2}>
            <div className={style.item2}>
              <label className={style.lbl}>Start Date</label>
              <input type="date" />
            </div>
            <div className={style.item2}>
              <label className={style.lbl}>End Date</label>
              <input type="date" />
            </div>
          </div>
        </div>
        <div className={style.actions}>
          <button className={style.action1}>add</button>
          <button className={style.action2}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
