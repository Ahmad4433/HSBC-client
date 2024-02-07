import React from "react";
import style from "./productSell.module.css";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import product1 from "../../../../assets/product1.png";
import product2 from "../../../../assets/product2.png";
import product3 from "../../../../assets/product3.png";

const ProductSell = () => {
  return (
    <div className={style.main}>
      <div className={style.card}>
        <div className={style.head}>
          <p className={style.title}>Product Sell</p>
          <div className={style.inner}>
            <div className={style.inner1}>
              <CiSearch className={style.search} />
              <input type="text" placeholder="Search" />
            </div>
            <div className={style.inner2}>
              <select className={style.select}>
                <option className={style.option}>Last 30 days</option>
              </select>
            </div>
          </div>
        </div>
        <div className={style.detailH}>
          <p>Seller</p>
          <div>
            <p>Fund Per Client</p>
            <p>Withdraw Amount</p>
          </div>
        </div>
        <div className={style.products}>
          <div className={style.left}>
            <div className={style.image}>
              <img src={product1} alt="product" className={style.img} />
            </div>
            <div className={style.content}>
              <p className={style.name} >Julien Chauveau (Manager)</p>
              <p className={style.detail} >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className={style.right}>
            <p>$50.00</p>
            <p>$20.00</p>
          </div>
        </div>
        <div className={style.products}>
          <div className={style.left}>
            <div className={style.image}>
              <img src={product2} alt="product" className={style.img} />
            </div>
            <div className={style.content}>
              <p className={style.name} >Julien Chauveau (Manager)</p>
              <p className={style.detail} >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className={style.right}>
            <p>$100.00</p>
            <p>$60.00</p>
          </div>
        </div>
        <div className={style.products}>
          <div className={style.left}>
            <div className={style.image}>
              <img src={product3} alt="product" className={style.img} />
            </div>
            <div className={style.content}>
              <p className={style.name} >Julien Chauveau (Manager)</p>
              <p className={style.detail} >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className={style.right}>
            <p>$400.00</p>
            <p>$120.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSell;
