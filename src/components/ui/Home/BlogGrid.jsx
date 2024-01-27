import React from "react";
import { Heading } from "../../common";
import { BlogCard, Grid } from "../../features";
import { investments } from "../../../assets/user/home";

const BlogGrid = () => {
  return (
    <>
      <Heading
        icon={true}
        iconPath={investments}
        text="Our Advantageous Investments!"
        className="primary"
      />
      <div className="bloggrid">
        <Grid className="grid-4">
          <BlogCard
            date="12/02/22"
            heading="Popular Booklet - 6.90% net"
            performaceText="Guarranteed Performance"
            performaceValue="69%"
            interest="6.9%"
            duration="12 Months"
            amount="280.00"
            text="You want to establish financial security and plan for possible future hauls. This fund allows you yo save money will be compltely safe and to benefit"
            to="/"
          />
            <BlogCard
            date="12/02/22"
            heading="Popular Booklet - 6.90% net"
            performaceText="Guarranteed Performance"
            performaceValue="69%"
            interest="6.9%"
            duration="12 Months"
            amount="280.00"
            text="You want to establish financial security and plan for possible future hauls. This fund allows you yo save money will be compltely safe and to benefit"
            to="/"
          />
            <BlogCard
            date="12/02/22"
            heading="Popular Booklet - 6.90% net"
            performaceText="Guarranteed Performance"
            performaceValue="69%"
            interest="6.9%"
            duration="12 Months"
            amount="280.00"
            text="You want to establish financial security and plan for possible future hauls. This fund allows you yo save money will be compltely safe and to benefit"
            to="/"
          />
            <BlogCard
            date="12/02/22"
            heading="Popular Booklet - 6.90% net"
            performaceText="Guarranteed Performance"
            performaceValue="69%"
            interest="6.9%"
            duration="12 Months"
            amount="280.00"
            text="You want to establish financial security and plan for possible future hauls. This fund allows you yo save money will be compltely safe and to benefit"
            to="/"
          />
        </Grid>
      </div>
    </>
  );
};

export default BlogGrid;
