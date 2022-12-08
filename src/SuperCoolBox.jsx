import React from "react";
import styles from "./SuperCoolBox.module.css";

const SuperCoolBox = () => {
  return (
    <div className={styles.box}>
      <h2
      //   option 1: directly in the div
      //   style={{ color: "rerd", textTransform: "uppercase" }}
      >
        Sharing a Galaxy
      </h2>
    </div>
  );
}; 

export default SuperCoolBox;


//css cons in react
///files are concatenated together into one stylesheet
//creating conflicting issues if a style selector is named the same
//one will overwrite another.... //specificty becomes more important

//css modules scopes css to specific components
