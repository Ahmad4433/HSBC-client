import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollTopTop";

// user profile
import UserProfile from "./ahmad-work/customer/user-profile/UserProfile";
import Commitment from "./ahmad-work/customer/commitment/Commitment";
import Historical from "./ahmad-work/customer/historical/Historical";
import Movement from "./ahmad-work/customer/movement/Movement";
import Terms from "./ahmad-work/customer/terms/Terms";
import PersonalInfo from "./ahmad-work/customer/personal-info/PersonalInfo";
import InvestmentHistory from "./ahmad-work/customer/investment-history/InvestmentHistory";
import InvestmentListAh from "./ahmad-work/customer/investmentAh-list/InvestmentListAh";
import Exchange from "./ahmad-work/customer/echange-chart/Exchange";
import Login from "./ahmad-work/customer/login/Login";
import Table from "./ahmad-work/tables/Table";
import NewAcc from "./ahmad-work/customer/create-account/NewAcc";
import LoginRoute from "./ahmad-work/customer/login/Login";
import VerificationPage from "./ahmad-work/customer/verification-page/verificatiobPage";
import SignupRoute from "./ahmad-work/customer/signup/Signup";
import UserOutlet from "./ahmad-work/super-component/user-outlet/UserOutlet";
import AdminOutlet from "./ahmad-work/super-component/admin-outlet/AdminOutlet";
import SuperCom from "./ahmad-work/super-component/SuperCom";

//this is for test we will delete letter

// all modules for user personal data

import Step2 from "./ahmad-work/customer/personal-info/info/Info";
import Step3 from "./ahmad-work/customer/personal-info/id-managment/IdManagment";
import Step4 from "./ahmad-work/customer/personal-info/address/Address";
import Step5 from "./ahmad-work/customer/personal-info/tax-statment/Tax";
import Step6 from "./ahmad-work/customer/personal-info/bank-information/BankInfo";

// admin dashboard routes
import PaymentRoute from "./ahmad-work/admin/admin/dashboard/payments/Payment";
import ClientProspectRoute from "./ahmad-work/admin/admin/dashboard/client-prospect/ClientProspect";
// Components ( Common )

import { AdminLayout, UserLayout } from "./layout";

// User Modules
import {
  BankInformation,
  Home,
  InvestmentAccount,
  InvestmentList,
  BaneFiciaries,
  PersonalInformation,
} from "./modules/user";

// Admin Routes
import { ClientAndProspect, Dashboard } from "./modules/admin";

const Routess = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* User */}
          <Route path="/" element={<SuperCom />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user-verification" element={<VerificationPage />} />

          {/* <Route path="/" element={<Home />} /> */}

          <Route element={<UserLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/investment-list" element={<InvestmentList />} />
            <Route path="/investment-account" element={<InvestmentAccount />} />
            <Route path="/edit-info" element={<PersonalInformation />} />
            <Route path="/bank-information" element={<BankInformation />} />
            <Route path="/baneficiaries" element={<BaneFiciaries />} />
            {/* new routes from ahmad */}
            {/* Ahmad Routes */}
            <Route path="/user-profile" element={<UserProfile />} />
            <Route path="/user/profile/historical" element={<Historical />} />
            <Route path="/user/profile/movement" element={<Movement />} />
            <Route path="/user/profile/terms" element={<Terms />} />
            <Route path="/user/profile/commitment" element={<Commitment />} />
            <Route path="/user/write-message" element={<PersonalInfo />} />

            <Route path="/account/step2" element={<Step2 />} />
            <Route path="/account/step3" element={<Step3 />} />
            <Route path="/account/step4" element={<Step4 />} />
            <Route path="/account/step5" element={<Step5 />} />
            <Route path="/account/step1" element={<PersonalInformation />} />
            <Route path="/account/step6" element={<Step6 />} />
            <Route path="/table" element={<Table />} />

            <Route
              path="/user-investment-history"
              element={<InvestmentHistory />}
            />
            <Route
              path="/user-investment-list"
              element={<InvestmentListAh />}
            />
            <Route path="/exchange" element={<Exchange />} />
            <Route path="/user/create-new/account" element={<NewAcc />} />
            {/* </Route> */}
            {/* login form */}
          </Route>

          {/* Admin Layout */}

          {/* New Changes */}

       
           
            
            <Route  element={<SuperCom />}>
            <Route path="/" element={<AdminLayout />}>
              <Route path="/admin/dashboard" element={<Dashboard />} />
              <Route
                path="/admin/client-prospect"
                element={<ClientAndProspect />}
              />
              <Route path="/payment" element={<PaymentRoute />} />
              </Route>
          </Route>
             
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
};

export default Routess;
