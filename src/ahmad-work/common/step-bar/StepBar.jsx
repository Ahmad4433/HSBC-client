import React from 'react'
import style from './stepBar.module.css'
import {useNavigate} from 'react-router-dom'
const StepBar = ({id}) => {
    const navigate = useNavigate()
    const navigateHander = (id)=> {

        navigate(`/account/step${id}`)


    }

  return (
    <div className={style.main} >
      
<div className={style.section} >
<div className={style.bar} >

<span onClick={()=>navigateHander(1)}   className={`${style.round} ${id>=1 ? style.fill:''}`} >1</span>
<span className={style.line} ></span>
<span onClick={()=>navigateHander(2)}  className={`${style.round} ${id>=2 ? style.fill:''}`} >2</span>
<span className={style.line} ></span>
<span onClick={()=>navigateHander(3)} className={`${style.round} ${id>=3 ? style.fill:''}`} >3</span>
<span className={style.line} ></span>
<span onClick={()=>navigateHander(4)} className={`${style.round} ${id>=4 ? style.fill:''}`} >4</span>
<span className={style.line} ></span>
<span onClick={()=>navigateHander(5)} className={`${style.round} ${id>=5 ? style.fill:''}`} >5</span>
<span className={style.line} ></span>
<span onClick={()=>navigateHander(6)} className={`${style.round} ${id>=6 ? style.fill:''}`} >6</span>
<span className={style.line} ></span>
<span onClick={()=>navigateHander(1)} className={`${style.round} ${id===7 ? style.fill:''}`} >7</span>


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
