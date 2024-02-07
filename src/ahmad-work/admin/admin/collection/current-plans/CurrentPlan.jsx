import React, { useRef } from "react";
import style from "./currentPlan.module.css";
import { MdOutlinePhotoCamera } from "react-icons/md";
const CurrentPlan = ({ hasPlan }) => {
  const fileRef = useRef();

  const clicHandler = () => {
    fileRef.current.click();
  };

  return (
    <div className={style.main}>
      <div className={style.card}>
        <div className={style.form}>
          <div onClick={clicHandler} className={style.left}>
            <div>
              <MdOutlinePhotoCamera className={style.camera} />
              <input type="file" ref={fileRef} style={{ display: "none" }} />
            </div>
          </div>
          <div className={style.right}>
            <div className={style.formC1}>
              <p>Plan's title :</p>
              <input type="text" />
            </div>

            <div className={style.formC2}>
              <div className={style.innerc2} >
                <div>
                  <p>From :</p>
                  <input type="text" />
                </div>
                <div>
                  <p>To :</p>
                  <input type="text" />
                  <span>$</span>
                </div>
                <div>
                  <p>Bonuses :</p>
                  <input type="text" />
                  <span>%</span>
                </div>
                <div>
                  <p>Limit of leverage :</p>
                  <input type="text" />
                  <span>%</span>
                </div>
              </div>
              <div className={style.innerc2} >
                <div>
                  <p>Blocked during :</p>
                  <input type="text" />
                </div>
                <div>
                  <p>Minimum of positions :</p>
                  <input type="text" />
                  <span>%</span>
                </div>
                <div>
                  <p>Warranty :</p>
                  <input type="text" />
                  <span>%</span>
                </div>
                <div>
                  <p>Commission :</p>
                  <input type="text" />
                  <span>%</span>
                </div>
              </div>
            </div>
            <div className={style.list}>
              <div className={style.listL}>
                <div>
                  <input type="checkbox" />
                  <span>
                    This plan allows you to access the list for investment 
                  </span>
                </div>
                <div>
                  <input type="checkbox" />
                  <span>Account status </span>
                </div>
              </div>
              <div className={style.listR}>
                <button>Delete the Plan</button>
              </div>
            </div>
          </div>
        </div>
        {hasPlan && (
          <div className={style.lower}>
            <div>
              <div className={style.item}>
                <input type="checkbox" />
                <p>isplay this plan in client/background-plans</p>
              </div>
              <div className={style.item}>
                <input type="checkbox" />
                <p>Total amount invested</p>
              </div>
              <div className={style.item}>
                <input type="checkbox" />
                <p>isplay this plan in client/background-plans</p>
              </div>
              <div className={style.item}>
                <input type="checkbox" />
                <p>isplay this plan in client/background-plans</p>
              </div>
            </div>
            <div>
              <div className={style.item}>
                <input type="checkbox" />
                <p>General information</p>
              </div>
              <div className={style.item}>
                <input type="checkbox" />
                <p>isplay this plan in client/background-plans</p>
              </div>
              <div className={style.item}>
                <input type="checkbox" />
                <p>isplay this plan in client/background-plans</p>
              </div>
              <div className={style.item}>
                <input type="checkbox" />
                <p>Investments</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CurrentPlan;
