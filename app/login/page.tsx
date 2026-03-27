"use client";

import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    if (email === "admin@gmail.com" && senha === "1234") {
      alert("Login realizado com sucesso!");
    } else {
      alert("Email ou senha inválidos");
    }
  }

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">

      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-md w-80"
      >

        <h1 className="text-xl font-bold mb-6 text-center">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-4 rounded"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Senha"
          className="w-full border p-2 mb-4 rounded"
          onChange={(e) => setSenha(e.target.value)}
        />

        <button className="w-full bg-green-600 text-white py-2 rounded">
          Entrar
        </button>

      </form>

    </main>
  );
}