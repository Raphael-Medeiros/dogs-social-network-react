import React from "react";
import Styles from "./Login.module.css";

import Input from "../../Forms/Input";
import Title from "../../Partials/Title";
import Button from "../../Forms/Button";

const Login = () => {
  return (
    <section className={Styles.container}>
      <div className={Styles.background}></div>
      <div></div>
      <div className={Styles.content}>
        <div>
          <Title>Entrar</Title>
          <Input label="Usuario" name="Usuario" error={null} />
          <Input label="Senha" name="Senha" type="password" error={null} />
          <Button>Entrar</Button>
        </div>
      </div>
    </section>
  );
};

export default Login;
