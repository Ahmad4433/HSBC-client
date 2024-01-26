import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const Routess = () => {
  return (
    <>
    
    
    <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:name" element={<CountryPage />}  />
          <Route path="/business" element={<Business />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blogs/:id" element={<SingleBlog />} />

          <Route path="/news" element={<News />} />
          <Route path="/referfriend" element={<ReferAFriendPage />} />
          <Route path="/referbusiness" element={<ReferABusiness />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/reviews" element={<ReviewPage />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/career_position" element={<CareerPosition />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/faqs" element={<Faqs />} />
          {/* Help section */}

          <Route path="/help" element={<Help />} />
          <Route path="/helpresult" element={<HelpResult />} />
          <Route path="/help/customersupport" element={<CustomerSupport />} />
          <Route path="/help/gettingstarted" element={<GettingStarted />} />
          <Route
            path="/help/manageyouraccount"
            element={<ManageYourAccount />}
          />
          <Route path="/help/referafriend" element={<ReferAFriend />} />
          <Route path="/help/safety" element={<Safety />} />
          <Route path="/help/sendmoneyonline" element={<SendMoneyOnline />} />
          <Route path="/help/transfer" element={<Transfer />} />

          {/* Footer  */}

          <Route path="/termsConditions" element={<TermsConditions />} />
          <Route path="/privancyPolicy" element={<PrivancyPolicy />} />
          <Route path="/complaintPolicy" element={<ComplaintPolicy />} />

          {/* BIC  /  Swift Pages  */}

          <Route path="/swift" element={<SwiftPage />} />
          <Route path="/findSwift" element={<FindSwift />} />
          <Route path="/checkSwift" element={<CheckSwift />} />

          {/*  */}
          {/* No result found */}
          <Route path="/noresultfound" element={<NoResultFound />} />
        </Routes>
        <Footer />
      </Router>
    
    
    </>
  )
}

export default Routess