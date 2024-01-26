import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollTopTop";

// Components ( Common )
import { Navbar } from "./components/common";

// Layouts
import { UserLayout } from "./layout";

// User Modules
import { Home } from "./modules/user";

const Routess = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* User */}

          {/* <Route path="/" element={<Home />} /> */}
          <Route path="" element={<UserLayout />}>
            <Route path="/" element={<Home />} />
          </Route>

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
