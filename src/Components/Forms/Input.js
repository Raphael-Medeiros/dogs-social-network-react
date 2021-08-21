import React from "react";
import styles from "./Input.module.css";

const Input = ({ label, name, erro, onchange, onblur, value, ...props }) => {
  return (
    <div className={styles.iptContainer}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onchange}
        onBlur={onblur}
        {...props}
        className={styles.input}
      />
      {erro && <p className={styles.error}>{erro}</p>}
    </div>
  );
};

export default Input;
