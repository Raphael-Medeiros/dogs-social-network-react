import React from "react";
import styles from "./Header.module.css";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <div className={styles.user}>
          <div className={styles.userText}> Entrar / Criar</div>
          <div className={styles.userIcon}></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
