import React from "react";

const Grid = (props) => {
  return (
    <>
      <div className={`grid ${props.className}`}>
        {props.children}
      </div>
    </>
  );
};

export default Grid;
