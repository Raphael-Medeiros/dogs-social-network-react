import React from "react";
import Styles from "./Login.module.css";

import Input from "../../Forms/Input";
import Title from "../../Partials/Title";
import Button from "../../Forms/Button";
import { Link } from "react-router-dom";
// import Loading from "../../Partials/Loading";
import useForm from "../../../Hooks/useForm";

const Login = () => {
  const email = useForm("email");

  // console.log(email.value);

  return (
    <section className={Styles.container}>
      <div className={Styles.background}></div>
      <div></div>
      <div className={Styles.content}>
        <Title>Entrar</Title>
        <Input
          label="Usuario"
          value={email.value}
          onchange={email.handleChange}
          erro={email.erro}
          onblur={email.onblur}
          name="Usuario"
          error={null}
        />
        <Input label="Senha" name="Senha" type="password" error={null} />
        <Button margin="12px auto">Entrar</Button>
        <div className={Styles.singUp}>
          Não tem uma conta?
          <span>
            <Link to="criar" style={{ color: "#fb1" }}>
              {" "}
              Crie aqui
            </Link>
          </span>
        </div>

        {/* <Loading /> */}
      </div>
    </section>
  );
};

export default Login;
