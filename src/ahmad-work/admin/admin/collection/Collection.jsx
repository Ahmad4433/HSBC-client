import React from 'react'
import style from './colleection.module.css'
import ProductSell from './product-sell/ProductSell'
import OrderInProgress from './order-in-progress/OrderInProgress'
import Withdraw from './widthdraw/Withdraw'
import CurrentPlan from './current-plans/CurrentPlan'
import CollectionHeader from './header/CollectionHeader'
const Collection = () => {
  return (
    <div className={style.main} >
        <CollectionHeader/>
    {/* <ProductSell/>
    <OrderInProgress/>
    <Withdraw/>
    <Withdraw/>
    <CurrentPlan hasPlan={true} />
    <CurrentPlan/> */}
    </div>
  )
}

export default Collection
