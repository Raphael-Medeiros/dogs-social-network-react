import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <div className={styles.user}>
          <Link to="/login">Entrar / Criar</Link>
          <div className={styles.userIcon}></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
