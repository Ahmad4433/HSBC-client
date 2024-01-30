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
import NewAcc from './ahmad-work/customer/create-account/NewAcc'

 //this is for test we will delete letter

// all modules for user personal data

import Step2 from './ahmad-work/customer/personal-info/info/Info'
import Step3 from './ahmad-work/customer/personal-info/id-managment/IdManagment'
import Step4 from './ahmad-work/customer/personal-info/address/Address'
import Step5 from './ahmad-work/customer/personal-info/tax-statment/Tax'

// Components ( Common )

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

{/* new routes from ahmad */}
            {/* Ahmad Routes */}
            <Route path="/user-profile" element={<UserProfile />} />
            <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/user/profile/historical" element={<Historical />} />
          <Route path="/user/profile/movement" element={<Movement />} />
          <Route path="/user/profile/terms" element={<Terms />} />
          <Route path="/user/profile/commitment" element={<Commitment />} />
          <Route path="/user/write-message" element={<PersonalInfo />} />
          {/* this for test */}
          <Route path="/table" element={<Table/>} /> 

      {/* all steps for updating personal data */}
      <Route path="/account-step2" element={<Step2/>} />
      <Route path="/account-step3" element={<Step3/>} />
      <Route path="/account-step4" element={<Step4/>} />
      <Route path="/account-step5" element={<Step5/>} />

    



          <Route
            path="/user/investment/history"
            element={<InvestmentHistory />}
          />
          <Route path="/user/investment/list" element={<InvestmentListAh />} />
          <Route path="/exchange" element={<Exchange />} />
          <Route path="/user/create-new/account" element={<NewAcc />} />
          
          {/* </Route> */}
          {/* login form */}
          <Route path="/login" element={<Login />} />
         
          </Route>

        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
};

export default Routess;
