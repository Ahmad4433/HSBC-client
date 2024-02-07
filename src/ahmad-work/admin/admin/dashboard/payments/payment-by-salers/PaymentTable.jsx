import React from "react";
import style from "./paymentTable.module.css";
import indicator from "../../assets/indicator.jpg";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

const PaymentTable = ({ title }) => {
  const number = "number";

  return (
    <div className={style.main}>
      <div className={style.section}>
        <div className={style.card}>
          <div className={style.navigation}>
            <p className={style.title}>{title}</p>
            <div className={style.both} >
         
              <div className={style.search}>
                <CiSearch className={style.sIcon} />
                <input placeholder="Search" className={style.input} />
              </div>
              <div className={style.filter}>
                <IoIosArrowDown className={style.aIcon} />
                <p>Last 30 days</p>
              </div>
            </div>
          </div>

          <table className={style.table}>
            <thead className={style.head}>
              <tr>
                <th>Date</th>
                <th>
                  First name and Surname <img src={indicator} />
                </th>
                <th>Attribution</th>
                <th>
                  Plan <img src={indicator} />
                </th>
                <th>
                  Price <img src={indicator} />
                </th>
                <th>
                  Bonuses <img src={indicator} />
                </th>
                <th>
                  Payment <img src={indicator} />
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.from(number).map((id, index) => {
                return (
                  <tr key={index}>
                    <td className={style.date}>12.12.2023 18:24</td>
                    <td className={style.name}>Cuvilliez Philippe</td>
                    <td className={style.post}>Torti Thierry (Manager)</td>
                    <td className={style.booklet}>HSBC Free Booklet</td>
                    <td className={style.amount}>1,100.00 EUR</td>
                    <td className={style.per}>0.0%</td>
                    <td className={style.action}>Payment Recived</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentTable;
