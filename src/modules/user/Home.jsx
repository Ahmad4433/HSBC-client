import React from "react";
import { Banner, Summary, Trading } from "../../components/ui";
import { Container } from "../../components/features";
import BlogGrid from "../../components/ui/Home/BlogGrid";

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



          </Container>
        </Container>
      </div>
    </>
  );
};

export default Home;
