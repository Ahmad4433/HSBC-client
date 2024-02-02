import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import { CiFilter } from "react-icons/ci";

import { FaFolder } from "react-icons/fa";
import { deleteIcon, editIcon, options } from "../../../assets/admin";

const ProspectClientData = () => {
  return (
    <>
      <div className="prospectClientData">
        <div className="prospectClientData-container">
          <h1>Data Client’s</h1>

          <div className="prospectClientData-container-filter">
            <div>
              <div>
                <p>Status</p>
                <MdOutlineKeyboardArrowDown />
              </div>
              <div>
                <p>Assign To</p>
                <CiCalendar />
              </div>
              <div>
                <p>Evaluate as</p>
                <CiCalendar />
              </div>
              <div className="prospectClientData-container-filter-input">
                <IoSearch />
                <input type="Search" placeholder="Search" />
              </div>
            </div>
            <button>
              <CiFilter />
              Filter
            </button>
          </div>

          <div className="prospectClientData-container-table">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Date</th>
                  <th>Atribute</th>
                  <th>Mail</th>
                  <th>Campaign</th>
                  <th>Country</th>
                  <th>Evaluation</th>
                  <th>Edit</th>
                  <th>Trash</th>
                  <th>Potition</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <FaFolder />
                    <p>1</p>
                  </td>
                  <td>Edward</td>
                  <td>754-5435-543</td>
                  <td>23-03-2022</td>
                  <td>654</td>
                  <td>haehyc@hotmail</td>
                  <td>21-03-2022</td>
                  <td>Eroupe</td>
                  <td>
                    <button>Enable</button>
                  </td>
                  <td>
                    <img src={editIcon} alt="icon" />
                  </td>
                  <td>
                    <img src={deleteIcon} alt="icon" />
                  </td>
                  <td>
                    <img src={options} alt="icon" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <FaFolder />
                    <p>1</p>
                  </td>
                  <td>Edward</td>
                  <td>754-5435-543</td>
                  <td>23-03-2022</td>
                  <td>654</td>
                  <td>haehyc@hotmail</td>
                  <td>21-03-2022</td>
                  <td>Eroupe</td>
                  <td>
                    <button>Enable</button>
                  </td>
                  <td>
                    <img src={editIcon} alt="icon" />
                  </td>
                  <td>
                    <img src={deleteIcon} alt="icon" />
                  </td>
                  <td>
                    <img src={options} alt="icon" />
                  </td>
                </tr>    <tr>
                  <td>
                    <FaFolder />
                    <p>1</p>
                  </td>
                  <td>Edward</td>
                  <td>754-5435-543</td>
                  <td>23-03-2022</td>
                  <td>654</td>
                  <td>haehyc@hotmail</td>
                  <td>21-03-2022</td>
                  <td>Eroupe</td>
                  <td>
                    <button>Enable</button>
                  </td>
                  <td>
                    <img src={editIcon} alt="icon" />
                  </td>
                  <td>
                    <img src={deleteIcon} alt="icon" />
                  </td>
                  <td>
                    <img src={options} alt="icon" />
                  </td>
                </tr>    <tr>
                  <td>
                    <FaFolder />
                    <p>1</p>
                  </td>
                  <td>Edward</td>
                  <td>754-5435-543</td>
                  <td>23-03-2022</td>
                  <td>654</td>
                  <td>haehyc@hotmail</td>
                  <td>21-03-2022</td>
                  <td>Eroupe</td>
                  <td>
                    <button>Enable</button>
                  </td>
                  <td>
                    <img src={editIcon} alt="icon" />
                  </td>
                  <td>
                    <img src={deleteIcon} alt="icon" />
                  </td>
                  <td>
                    <img src={options} alt="icon" />
                  </td>
                </tr>    <tr>
                  <td>
                    <FaFolder />
                    <p>1</p>
                  </td>
                  <td>Edward</td>
                  <td>754-5435-543</td>
                  <td>23-03-2022</td>
                  <td>654</td>
                  <td>haehyc@hotmail</td>
                  <td>21-03-2022</td>
                  <td>Eroupe</td>
                  <td>
                    <button>Enable</button>
                  </td>
                  <td>
                    <img src={editIcon} alt="icon" />
                  </td>
                  <td>
                    <img src={deleteIcon} alt="icon" />
                  </td>
                  <td>
                    <img src={options} alt="icon" />
                  </td>
                </tr>    <tr>
                  <td>
                    <FaFolder />
                    <p>1</p>
                  </td>
                  <td>Edward</td>
                  <td>754-5435-543</td>
                  <td>23-03-2022</td>
                  <td>654</td>
                  <td>haehyc@hotmail</td>
                  <td>21-03-2022</td>
                  <td>Eroupe</td>
                  <td>
                    <button>Enable</button>
                  </td>
                  <td>
                    <img src={editIcon} alt="icon" />
                  </td>
                  <td>
                    <img src={deleteIcon} alt="icon" />
                  </td>
                  <td>
                    <img src={options} alt="icon" />
                  </td>
                </tr>    <tr>
                  <td>
                    <FaFolder />
                    <p>1</p>
                  </td>
                  <td>Edward</td>
                  <td>754-5435-543</td>
                  <td>23-03-2022</td>
                  <td>654</td>
                  <td>haehyc@hotmail</td>
                  <td>21-03-2022</td>
                  <td>Eroupe</td>
                  <td>
                    <button>Enable</button>
                  </td>
                  <td>
                    <img src={editIcon} alt="icon" />
                  </td>
                  <td>
                    <img src={deleteIcon} alt="icon" />
                  </td>
                  <td>
                    <img src={options} alt="icon" />
                  </td>
                </tr>    <tr>
                  <td>
                    <FaFolder />
                    <p>1</p>
                  </td>
                  <td>Edward</td>
                  <td>754-5435-543</td>
                  <td>23-03-2022</td>
                  <td>654</td>
                  <td>haehyc@hotmail</td>
                  <td>21-03-2022</td>
                  <td>Eroupe</td>
                  <td>
                    <button>Enable</button>
                  </td>
                  <td>
                    <img src={editIcon} alt="icon" />
                  </td>
                  <td>
                    <img src={deleteIcon} alt="icon" />
                  </td>
                  <td>
                    <img src={options} alt="icon" />
                  </td>
                </tr>    <tr>
                  <td>
                    <FaFolder />
                    <p>1</p>
                  </td>
                  <td>Edward</td>
                  <td>754-5435-543</td>
                  <td>23-03-2022</td>
                  <td>654</td>
                  <td>haehyc@hotmail</td>
                  <td>21-03-2022</td>
                  <td>Eroupe</td>
                  <td>
                    <button>Enable</button>
                  </td>
                  <td>
                    <img src={editIcon} alt="icon" />
                  </td>
                  <td>
                    <img src={deleteIcon} alt="icon" />
                  </td>
                  <td>
                    <img src={options} alt="icon" />
                  </td>
                </tr>    <tr>
                  <td>
                    <FaFolder />
                    <p>1</p>
                  </td>
                  <td>Edward</td>
                  <td>754-5435-543</td>
                  <td>23-03-2022</td>
                  <td>654</td>
                  <td>haehyc@hotmail</td>
                  <td>21-03-2022</td>
                  <td>Eroupe</td>
                  <td>
                    <button>Enable</button>
                  </td>
                  <td>
                    <img src={editIcon} alt="icon" />
                  </td>
                  <td>
                    <img src={deleteIcon} alt="icon" />
                  </td>
                  <td>
                    <img src={options} alt="icon" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProspectClientData;
