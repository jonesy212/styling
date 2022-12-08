import React from "react";
import "./Coolbox.css";

const CoolBox = () => {
  return (
    <div className="box">
      <h2
      //   option 1: directly in the div
      //   style={{ color: "rerd", textTransform: "uppercase" }}
      >
        The Things we Share
      </h2>
    </div>
  );
}; 

export default CoolBox;


//css cons in react
///files are concatenated together into one stylesheet
//creating conflicting issues if a style selector is named the same
//one will overwrite another.... //specificty becomes more important

//css modules scopes css to specific components
