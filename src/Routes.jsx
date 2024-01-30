import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollTopTop";

// user profile
import UserProfile from "./ahmad-work/customer/user-profile/UserProfile";

// Components ( Common )

// Layouts
import { UserLayout } from "./layout";

// User Modules
import {
  BankInformation,
  Home,
  InvestmentAccount,
  InvestmentList,
  BaneFiciaries,
  PersonalInformation,
} from "./modules/user";

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
            <Route path="/investment-list" element={<InvestmentList />} />
            <Route path="/investment-account" element={<InvestmentAccount />} />
            <Route path="/edit-info" element={<PersonalInformation />} />
            <Route path="/bank-information" element={<BankInformation />} />
            <Route path="/baneficiaries" element={<BaneFiciaries />} />

            {/* Ahmad Routes */}
            <Route path="/user-profile" element={<UserProfile />} />
          </Route>

        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
};

export default Routess;
