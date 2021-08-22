import React from "react";
import Styles from "./Login.module.css";
import { Link } from "react-router-dom";

import Input from "../../Forms/Input";
import Title from "../../Partials/Title";
import Button from "../../Forms/Button";
import Loading from "../../Partials/Loading";
import useForm from "../../../Hooks/useForm";
import { TOKEN_POST, TOKEN_VALIDATE, URL_BASE } from "../../../api";

const Login = () => {
  const user = useForm();
  const senha = useForm();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    async function validateToken() {
      const { url } = TOKEN_VALIDATE;

      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        console.log();
      }
    }
    const token = localStorage.getItem("token");

    if (!token) return;
  }, []);

  async function handleLogin() {
    user.validate();
    senha.validate();

    if (user.erro || senha.erro) return;

    try {
      setLoading(true);
      const { endpoint, headers } = TOKEN_POST;
      const response = await fetch(URL_BASE + endpoint, {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
          username: user.value,
          password: senha.value,
        }),
      });
      if (!response.ok) {
        throw new ErrorEvent(response.statusText);
      }
      const json = await response.json();
      console.log(json);
      localStorage.setItem("token", json.token);
    } catch (err) {
      console.log(err);
      setError(err.type);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className={Styles.container}>
      <div className={Styles.background}></div>
      <div></div>
      <div className={Styles.content}>
        <Title>Entrar</Title>
        <Input
          label="Usuario"
          value={user.value}
          onchange={user.handleChange}
          erro={user.erro}
          onblur={user.onblur}
          name="Usuario"
        />
        <Input
          label="Senha"
          value={senha.value}
          onchange={senha.handleChange}
          erro={senha.erro}
          onblur={senha.onblur}
          name="Senha"
          type="password"
        />
        <Button margin="12px auto" onClick={handleLogin}>
          Entrar
        </Button>
        {error && (
          <p style={{ color: "red", textAlign: "center", fontSize: "12px" }}>
            {error}
          </p>
        )}
        <div className={Styles.singUp}>
          Não tem uma conta?
          <span>
            <Link to="criar" style={{ color: "#fb1" }}>
              {" "}
              Crie aqui
            </Link>
          </span>
        </div>

        {loading && <Loading />}
      </div>
    </section>
  );
};

export default Login;
