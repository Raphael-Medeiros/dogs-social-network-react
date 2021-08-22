import React from "react";
import Styles from "./Button.module.css";

const Button = ({ children, margin, ...props }) => {
  return (
    <button className={Styles.button} {...props} style={{ margin: margin }}>
      {children}
    </button>
  );
};

export default Button;
