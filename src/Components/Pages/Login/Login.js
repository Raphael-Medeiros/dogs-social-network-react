import React from "react";
import Styles from "./Login.module.css";

import Input from "../../Forms/Input";
import Title from "../../Partials/Title";

const Login = () => {
  return (
    <section className={Styles.container}>
      <div className={Styles.background}></div>
      <div></div>
      <div className={Styles.content}>
        <Title>Entrar</Title>
        <Input label="Usuario" name="Usuario" error={null} />
        <Input label="Senha" name="Senha" error={null} />
      </div>
    </section>
  );
};

export default Login;
