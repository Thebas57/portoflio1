import React from "react";

const Project = ({ props }) => {
  return (
    <div className="project">
      <img src={props.picture} alt="" />
      <div className="txt-hide">
        <h2>test</h2>
        <p>test</p>
      </div>
    </div>
  );
};

export default Project;
