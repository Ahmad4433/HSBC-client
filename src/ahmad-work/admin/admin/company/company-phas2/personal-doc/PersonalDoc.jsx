import React from 'react'
import style from './personalDoc.module.css'
const PersonalDoc = () => {
  return (
    <div className={style.main} >
      <p className={style.title} >Personal Document</p>
<div className={style.card} >
<div className={style.parent} >

<div className={style.item} >
        <div className={style.fcont} >
            <label className={style.lbl} >Title</label>
            <input type='text'  />
        </div>
        <button className={style.action} >Add</button>
    </div>    <div className={style.item} >
        <div className={style.fcont} >
            <label className={style.lbl} >Subtitle</label>
            <input type='text'  />
        </div>
        <button className={style.action} >Add</button>
    </div>    <div className={style.item} >
        <div className={style.fcont} >
            <label className={style.lbl} >Link Title</label>
            <input type='text'  />
        </div>
        <button className={style.action} >Add</button>
    </div>    <div className={style.item} >
        <div className={style.fcont} >
            <label className={style.lbl} >Upload</label>
            <input type='text'  />
        </div>
        <button className={style.action} >Add</button>
    </div>

</div>

</div>

    </div>
  )
}

export default PersonalDoc
