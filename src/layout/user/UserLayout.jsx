import React from "react";
import { Footer, Navbar } from "../../components/common";
import { Outlet } from "react-router-dom";
import { Container } from "../../components/features";

const UserLayout = () => {
  return (
    <>
      <Navbar />
      <div className="bg_gray">
        <Container className="main">
          <Container className="margins">
            <Outlet />
          </Container>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default UserLayout;
