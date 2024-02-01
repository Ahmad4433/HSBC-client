import React from "react";
import { motion } from "framer-motion";
import { logo } from "../../../assets/user/navbar";
import { navbarRoutes } from "../../../data/routes";
import { RiMenuUnfoldLine } from "react-icons/ri";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

const MobileNavbar = (props) => {
  return (
    <>
      <motion.div
        initial={{ x: "20rem", opacity: 0 }}
        animate={{ x: "1px", opacity: 1 }}
        exit={{ opacity: 0 }}
        className="mobileNav"
      >
        <div className="mobileNav-container">
          <div className="mobileNav-container-cancel">
            <RiMenuUnfoldLine onClick={props.onClick} />
          </div>
          <div className="mobileNav-container-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="mobileNav-container-menus">
            {navbarRoutes.map((item) => (
              <>
                <Link
                  to={item.to}
                  className="mobileNav-container-menus-menu"
                  key={uuidv4()}
                >
                  <item.icon />
                  <p>{item.text}</p>
                </Link>
                {item.subRoutes &&
                  item.subRoutes.map((el) => (
                    <Link
                      key={uuidv4()}
                      to={el.to}
                      className="mobileNav-container-menus-subMenus"
                    >
                      <el.icon />
                      <p>{el.text}</p>
                    </Link>
                  ))}
              </>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default MobileNavbar;
