import React, { useState } from "react";

export function useHome() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return {
    email,
    setEmail,
    password,
    setPassword,
  };
}
