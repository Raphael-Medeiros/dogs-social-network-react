import React from "react";

const validacao = {
  email: {
    rejex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  },
};

const useForm = (type) => {
  const [value, setValue] = React.useState(null);
  const [erro, setErro] = React.useState(null);

  function handleChange({ target }) {
    setValue(target.value);
    if (erro) validate(value);
  }

  function validate(valueVal) {
    if (!valueVal || valueVal.length === 1) {
      setErro("Preencha um valor");
    } else if (!validacao[type].rejex.test(valueVal)) {
      setErro("Preencha um email valido ");
    } else {
      setErro(null);
    }
  }

  return {
    value,
    setValue,
    handleChange,
    onblur: () => validate(value),
    erro,
    setErro,
    validate: () => validate(value),
  };
};

export default useForm;
