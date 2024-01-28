import React from "react";
import { Banner, Summary, Trading, BlogGrid, News } from "../../components/ui";
import { Container } from "../../components/features";

const Home = () => {
  return (
    <>
      {/* Banner */}
      <Banner />

      {/* Summary Section */}
      <Summary />

      {/* Trading Section */}
      <Trading />

      {/* Blog Grid Section */}
      <BlogGrid />

      {/* News */}
      <News />
    </>
  );
};

export default Home;
