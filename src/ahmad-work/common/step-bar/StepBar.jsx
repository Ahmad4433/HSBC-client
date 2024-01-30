import React from 'react'
import style from './stepBar.module.css'
const StepBar = ({id}) => {
  return (
    <div className={style.main} >
      
<div className={style.section} >
<div className={style.bar} >

<span className={`${style.round} ${id>=1 ? style.fill:''}`} >1</span>
<span className={style.line} ></span>
<span className={`${style.round} ${id>=2 ? style.fill:''}`} >2</span>
<span className={style.line} ></span>
<span className={`${style.round} ${id>=3 ? style.fill:''}`} >3</span>
<span className={style.line} ></span>
<span className={`${style.round} ${id>=4 ? style.fill:''}`} >4</span>
<span className={style.line} ></span>
<span className={`${style.round} ${id>=5 ? style.fill:''}`} >5</span>
<span className={style.line} ></span>
<span className={`${style.round} ${id>=6 ? style.fill:''}`} >6</span>
<span className={style.line} ></span>
<span className={`${style.round} ${id===7 ? style.fill:''}`} >7</span>


</div>

<div className={style.desc} >

<p className={style.title} >Personal Data</p>
<p className={style.message} >Complete the information Request in the block blow</p>
<p className={style.title} >Personal Data</p>
<p className={style.message} >Complete the information Request in the block blow</p>
<p className={style.title} >Personal Data</p>
<p className={style.message} >Complete the information Request in the block blow</p>
<p className={style.title} >Personal Data</p>
<p className={style.message} >Complete the information Request in the block blow</p>
<p className={style.title} >Personal Data</p>
<p className={style.message} >Complete the information Request in the block blow</p>
<p className={style.title} >Personal Data</p>
<p className={style.message} >Complete the information Request in the block blow</p>
<p className={style.title} >Personal Data</p>
<p className={style.message} >Complete the information Request in the block blow</p>

</div>

</div>

    </div>
  )
}

export default StepBar
