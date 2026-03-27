"use client";

import { useState } from "react";

export default function Cadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleCadastro(e: React.FormEvent) {
    e.preventDefault();

    alert("Usuário cadastrado (simulação)");
  }

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">

      <form
        onSubmit={handleCadastro}
        className="bg-white p-8 rounded-xl shadow-md w-80"
      >

        <h1 className="text-xl font-bold mb-6 text-center">
          Cadastro
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
          Criar conta
        </button>

      </form>

    </main>
  );
}