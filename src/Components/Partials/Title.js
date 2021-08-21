import React from "react";
import styles from "./Title.module.css";

const Title = ({ children, mt, mb }) => {
  return (
    <h1 className={styles.title} style={{ marginTop: mt, marginBottom: mb }}>
      {children}
    </h1>
  );
};

export default Title;
