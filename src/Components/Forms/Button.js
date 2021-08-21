import React from "react";
import Styles from "./Button.module.css";

const Button = ({ children, margin }) => {
  return (
    <button className={Styles.button} style={{ margin: margin }}>
      {children}
    </button>
  );
};

export default Button;
