import React, { useState } from "react";
export function useHome() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmitLogin(email: string, password: string) {
    const params = {
      login: email,
      password,
    };

    console.log("Login efetuado: ", JSON.stringify(params));
  }
  return {
    email,
    setEmail,
    password,
    setPassword,
    handleSubmitLogin,
  };
}
