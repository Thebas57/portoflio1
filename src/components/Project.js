import React from "react";

const Project = ({ props }) => {
  return (
    <div className="project">
      <img src={props.picture} alt="" />
      <div className="txt-hide">
        <h2>{props.name}</h2>
        <p>{props.info}</p>
      </div>
    </div>
  );
};

export default Project;
