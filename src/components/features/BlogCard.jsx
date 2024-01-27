import React from "react";
import { LinkBtn } from "../common";
import { btnicon } from "../../assets/user/blogs";

const BlogCard = (props) => {
  return (
    <>
      <div className="blogCard">
        <div className="blogCard-container">
          <div
            className="blogCard-container-image"
            style={{ backgroundImage: `url(${props.image})` }}
          >
            <div className="blogCard-container-image-content">
              <div className="blogCard-container-image-content-date">
                <p>{props.date}</p>
              </div>
              <div className="blogCard-container-image-content-performace">
                <h2>{props.heading}</h2>
                <div className="blogCard-container-image-content-performace-value">
                  <p>{props.performaceText}</p>
                  <p>{props.performaceValue}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="blogCard-container-content">
            <div className="blogCard-container-content-header">
              <div>
                <p>Interest rate:</p>
                <h6>{props.interest}</h6>
              </div>

              <div>
                <p>Duration</p>
                <h6>{props.duration}</h6>
              </div>
              <div>
                <p>Amount per share</p>
                <h6>${props.amount}</h6>
              </div>
            </div>
            <div className="blogCard-container-content-header-text">
              <p>{props.text}</p>
            </div>
            <LinkBtn
              to={props.to}
              icon={true}
              iconPath={btnicon}
              className="secondry"
            >
              Learn More
            </LinkBtn>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
