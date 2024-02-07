import React from "react";
import style from "./withdrawTable.module.css";
import indicator from '../../../../../assets/indicator2.png'
import { CiCalendar } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import { CiFilter } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FiArrowRight } from "react-icons/fi";
import { FaFolder } from "react-icons/fa";

const WithdrawTable = () => {
  return (
    <div className={style.main} >
        <p className={style.title} >Order in Progress</p>

        <div className={style.filterCont} >
            <div className={style.item} >
                <select className={style.select} >
                    <option className={style.status} >status</option>
                </select>
            </div>
            <div className={style.item} >
                <span>Assign To</span>
                <input type="date" className={style.datePick} />
            </div>
            <FiArrowRight className={style.iconS} />
            <div className={style.item} >
            <span>Evaluate as</span>
                <input type="date" className={style.datePick} />
            </div>
            <div className={style.item} >
            <IoSearch className={style.iconS} />
        <input type="text" placeholder="search" className={style.search} />
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
              Withdraw Ammount <img src={indicator} />
            </th>
            <th>
              Status <img src={indicator} />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={style.date}>12.12.2023 18:24</td>
            <td className={style.name}>Cuvilliez Philippe</td>
            <td className={style.post}>Torti Thierry (Manager)</td>
            <td className={style.booklet}>HSBC Free Booklet</td>
            <td className={style.amount}>1,100.00 EUR</td>
            <td className={style.action}>Approved</td>
          </tr>
          <tr>
            <td className={style.date}>12.12.2023 18:24</td>
            <td className={style.name}>Cuvilliez Philippe</td>
            <td className={style.post}>Torti Thierry (Manager)</td>
            <td className={style.booklet}>HSBC Free Booklet</td>
            <td className={style.amount}>1,100.00 EUR</td>
            <td className={style.action}>Approved</td>
          </tr>
          <tr>
            <td className={style.date}>12.12.2023 18:24</td>
            <td className={style.name}>Cuvilliez Philippe</td>
            <td className={style.post}>Torti Thierry (Manager)</td>
            <td className={style.booklet}>HSBC Free Booklet</td>
            <td className={style.amount}>1,100.00 EUR</td>
            <td className={style.action}>Approved</td>
          </tr>
          <tr>
            <td className={style.date}>12.12.2023 18:24</td>
            <td className={style.name}>Cuvilliez Philippe</td>
            <td className={style.post}>Torti Thierry (Manager)</td>
            <td className={style.booklet}>HSBC Free Booklet</td>
            <td className={style.amount}>1,100.00 EUR</td>
            <td className={style.action}>Approved</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WithdrawTable;
