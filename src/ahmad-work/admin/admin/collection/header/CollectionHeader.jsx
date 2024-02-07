import React, { useState } from "react";
import style from "./collectionHeader.module.css";
import ProductSell from "../product-sell/ProductSell";
import Withdraw from "../widthdraw/Withdraw";
import CurrentPlan from "../current-plans/CurrentPlan";
import OrderInProgress from "../order-in-progress/OrderInProgress";
const CollectionHeader = () => {
  const [num, setNum] = useState(0);

  const changeMenu = (id) => {
    setNum(id);
  };

  return (
    <div className={style.main}>
      <div className={style.nav}>
        <p
          onClick={() => changeMenu(0)}
          className={num === 0 ? style.active : style.title}
        >
          Money Received
        </p>
        <p
          onClick={() => changeMenu(1)}
          className={num === 1 ? style.active : style.title}
        >
          Withdraw
        </p>
        <p
          onClick={() => changeMenu(2)}
          className={num === 2 ? style.active : style.title}
        >
          Deposit
        </p>
        <p
          onClick={() => changeMenu(3)}
          className={num === 3 ? style.active : style.title}
        >
          Add/Modify a plan
        </p>
      </div>

      {num === 0 && (
        <div>
          <ProductSell />
          <OrderInProgress />
        </div>
      )}
      {num === 1 && <Withdraw />}
      {num === 2 && <Withdraw />}
      {num === 3 && (
        <div>
          <CurrentPlan hasPlan={true} />
          <CurrentPlan />
        </div>
      )}
    </div>
  );
};

export default CollectionHeader;
