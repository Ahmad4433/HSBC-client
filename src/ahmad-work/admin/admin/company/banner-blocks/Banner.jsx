import React from "react";
import style from "./banner.module.css";
import banner from "../../../../assets/banner.png";
import { Switch } from "@mui/material";
import logo from "../../../../assets/logo.png";
import laptop from "../../../../assets/laptop.png";
import glasses from "../../../../assets/galsses.png";
import { IoMdArrowUp } from "react-icons/io";

const Banner = () => {
  return (
    <div className={style.main}>
      <div className={style.card}>
        <p className={style.title}>PERSONAL BANNER AND BLOCKS</p>
        <div className={style.bannerS}>
          <span>on</span>
          <Switch color="success" />
          <span>off</span>
        </div>

        <div className={style.bannerS2}>
          <p>banner</p>
          <div>
            <span>on</span>
            <Switch color="success" />
            <span>off</span>
          </div>
        </div>
        <div className={style.banner}>
          <div className={style.bannerC}>
            <img src={banner} alt="banner" className={style.img} />
          </div>
          <div className={style.content}>
            <span>HSBC</span>
            <img src={logo} alt="logo" className={style.logo} />
          </div>
        </div>

        <div className={style.posting}>
          <div className={style.posting1}>
            <p>posting1</p>
            <div>
              <span>on</span>
              <Switch color="success" />
              <span>off</span>
            </div>
          </div>
          <div className={style.posting2}>
            <p>posting2</p>
            <div>
              <span>on</span>
              <Switch color="success" />
              <span>off</span>
            </div>
          </div>
        </div>
        <div className={style.owners}>
          <div className={style.owner}>
            <img src={laptop} alt="laptop" className={style.laptop} />
            <div className={style.profile}>
              <img src={glasses} />
              <div className={style.profileD}>
                <p className={style.detail}>Johnathonchester</p>
                <p className={style.name}>Tom Glover</p>
              </div>
            </div>
          </div>
          <div className={style.owner}>
            <img src={laptop} alt="laptop" className={style.laptop} />
            <div className={style.profile}>
              <img src={glasses} />
              <div className={style.profileD}>
                <p className={style.detail}>Johnathonchester</p>
                <p className={style.name}>Tom Glover</p>
              </div>
            </div>
          </div>

          <div className={style.selection}>
            <div className={style.colors}>
              <p className={style.colorT}>Colors</p>
              <div className={style.select}>
                <span className={style.colorN}>times Azure</span>
                <span className={style.colorN1}>Blue</span>
                <span className={style.colorN2}>Peach</span>
                <span className={style.colorN3}>Pink</span>
                <span className={style.colorN4}>Green</span>
                <span className={style.colorN5}>times Purple</span>
              </div>
            </div>
            <div className={style.colors}>
              <p className={style.colorT}>Colors</p>
              <div className={style.select}>
                <span className={style.colorN}>times Azure</span>
                <span className={style.colorN1}>Blue</span>
                <span className={style.colorN2}>Peach</span>
                <span className={style.colorN3}>Pink</span>
                <span className={style.colorN4}>Green</span>
                <span className={style.colorN5}>times Purple</span>
              </div>
            </div>
          </div>
        </div>

        <div className={style.bannerL}>
          <p>Banner 2</p>
          <div>
            <span>on</span>
            <Switch color="success" />
            <span>off</span>
          </div>
        </div>

        <div className={style.trading}>
          <p>Trading</p>
          <div className={style.timer}>
            <div>
              <span className={style.day}>today</span>
              <IoMdArrowUp className={style.icon} />
            </div>
            <span className={style.amount} >$16</span>
          </div>
          <div className={style.timer}>
            <div>
              <span className={style.day}>today</span>
              <IoMdArrowUp className={style.icon} />
            </div>
            <span className={style.amount} >$16</span>
          </div>
          <div className={style.timer}>
            <div>
              <span className={style.day}>today</span>
              <IoMdArrowUp className={style.icon} />
            </div>
            <span className={style.amount} >$16</span>
          </div>
          <div className={style.timer}>
            <div>
              <span className={style.day}>today</span>
              <IoMdArrowUp className={style.icon} />
            </div>
            <span className={style.amount} >$16</span>
          </div>
          <div className={style.timer}>
            <div>
              <span className={style.day}>today</span>
              <IoMdArrowUp className={style.icon} />
            </div>
            <span className={style.amount} >$16</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
