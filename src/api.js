export const URL_BASE = "https://dogsapi.origamid.dev/json";

export const TOKEN_POST = {
  endpoint: "/jwt-auth/v1/token",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: {
    username: "",
    password: "",
  },
};

export const TOKEN_VALIDATE = {
  url: URL_BASE + "/jwt-auth/v1/token/validate",
};
