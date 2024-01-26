import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/common";
import ScrollToTop from "./ScrollTopTop";

const Routess = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          {/* User */}

          {/* <Route path="/" element={<Home />} /> */}

          {/* Admin */}
          {/* No result found */}
          {/* <Route path="/noresultfound" element={<NoResultFound />} /> */}
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
};

export default Routess;
