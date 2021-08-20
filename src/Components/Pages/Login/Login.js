import React from "react";
import Input from "../../Forms/Input";

const Login = () => {
  return (
    <section>
      <Input label="Usuario" name="Usuario" error={"usuario invalido"} />
    </section>
  );
};

export default Login;
