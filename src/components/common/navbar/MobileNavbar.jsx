import React from "react";
import { motion } from "framer-motion";

const MobileNavbar = () => {
  return (
    <>
      <motion.div
        initial={{ x: "20rem", opacity: 0 }}
        animate={{ x: "1px", opacity: 1 }}
        exit={{ opacity: 0 }}
        className="mobileNav"
      >
        <div className="mobileNav-container"></div>
      </motion.div>
    </>
  );
};

export default MobileNavbar;
