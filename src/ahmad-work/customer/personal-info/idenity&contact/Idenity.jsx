import React, { useEffect, useRef, useState } from "react";
import styles from "./idenity.module.css";
import { AiOutlineUpload } from "react-icons/ai";
import { MdOutlineFileDownload } from "react-icons/md";
const Idenity = ({title}) => {


    const [selectImg,setSelectImg] = useState(null)
    const imgRef = useRef(null)


    const clickHandler = ()=>{
        imgRef.current.click()
    }

    const imgeHandler = (e)=>{
        const contect = e.target.files[0]
        const reader = new FileReader()
        reader.onload = (e)=>{

            setSelectImg(e.target.result)

        
        }
        
        reader.readAsDataURL(contect)

    }

    
useEffect(()=>{

console.log(selectImg)

},[selectImg])

  return (
    <div className={styles.main}>
      <div className={styles.section}></div>

      <div className={styles.card}>
        <p className={styles.title} >Identity & Contact</p>
        <div onClick={clickHandler} className={styles.preview}>
          <div>
           {!selectImg &&  <p className={styles.format} >Format Document : PDF</p>}
          </div>
         <div className={styles.imgCont} > <img className={styles.img} src={selectImg}  /></div>
          <div className={styles.upload} >
          {!selectImg && <div className={styles.hideCont} >
            <AiOutlineUpload onClick={clickHandler}  className={styles.upIcon} />
            <p className={styles.upTitle} >{title}</p></div>}
            <input ref={imgRef} type="file" accept="png,jpg,jpeg" onChange={imgeHandler} style={{display:'none'}} />
          </div>
        </div>

        <p className={styles.detail1} >
          Nature Document : Complete the information Request in the block blow.
          Complete the information Request in the block blow.{" "}
        </p>
        <p className={styles.detail2} > Document : Complete the information </p>
        <p className={styles.detail3} > Visibilitas Document : Complete the information </p>
        <div className={styles.download}>
          <MdOutlineFileDownload className={styles.downIcon} />
          <p className={styles.downTitle} >Download Document</p>
        </div>
      </div>
    </div>
  );
};

export default Idenity;
