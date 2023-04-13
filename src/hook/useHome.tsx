import React, { useState } from "react";
import { login } from "../../apiUseCases/login";

export function useHome() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmitLogin(email: string, password: string) {
    if (!email.trim()) {
      return;
    }
    if (!password.trim()) {
      return;
    }
    login(email, password);
    setEmail("");
    setPassword("");
  }

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleSubmitLogin,
  };
}
