import React from "react";
import styles from "./Input.module.css";

const Input = ({ label, name, error, ...props }) => {
  return (
    <div className={styles.iptContainer}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        {...props}
        className={styles.input}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
