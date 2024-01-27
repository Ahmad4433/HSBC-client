import React from "react";
import { Banner, Summary, Trading, BlogGrid, News } from "../../components/ui";
import { Container } from "../../components/features";

const Home = () => {
  return (
    <>
      <div className="bg_gray">
        <Container className="main">
          <Container className="margins">
            
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




          </Container>
        </Container>
      </div>
    </>
  );
};

export default Home;
