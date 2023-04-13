import React, { useState } from "react";
export function useHome() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmitLogin(email: string, password: string) {
    const params = {
      login: email,
      password,
    };
    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(params),
    });

    console.log("Login efetuado: ", response);
  }
  return {
    email,
    setEmail,
    password,
    setPassword,
    handleSubmitLogin,
  };
}
