import React, { useRef } from "react";
import styles from "./personalInfo.module.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import FroalaEditorComponent from "react-froala-wysiwyg";
import "froala-editor/js/plugins.pkgd.min.js";
import { AiOutlineUpload } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";

const PersonalInfo = () => {
    

    const fileRef = useRef()
    const clicHandler = ()=>{
        if(fileRef.current){
            fileRef.current.click()
        }
    }

    const editorConfig = {
        toolbarButtons: {
          moreText: {
            buttons: ["bold", "italic", "underline", "strikeThrough", "subscript", "superscript"],
          },
          moreParagraph: {
            buttons: ["alignLeft", "alignCenter", "alignRight", "alignJustify", "formatOLSimple", "formatULSimple"],
          },
      
          moreMisc: {
            buttons: ["undo", "redo"],
          },
        },
      };
 

  return (
    <div className={styles.main}>
      <div className={styles.section}>
        <div className={styles.card}>
          <p className={styles.send} >send message</p>
          <p className={styles.subject} >subject</p>
          <input className={styles.input}  placeholder="Object of the meesage..." />
          <p className={styles.compose} >Compose Your Message</p>
          <div className={styles.editor} >
       <FroalaEditorComponent config={editorConfig}  />
       </div>
       <div className={styles.file} >

        <div onClick={clicHandler} className={styles.picker} >
            <AiOutlineUpload  className={styles.icon} />
            <span>Add File</span>
            <input ref={fileRef} type='file' style={{display:'none'}} />
        </div>
        <div className={styles.edit} >
            <CiEdit className={styles.editI} />
    <span>Edit</span>
        </div>

       </div>
        
        </div>
   
      </div>

     
    </div>
  );
};

export default PersonalInfo;
