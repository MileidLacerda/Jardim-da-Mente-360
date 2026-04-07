"use client";

import { useState } from "react";

export default function Cadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleCadastro(e: React.FormEvent) {
    e.preventDefault();

    alert(
      `Cadastro realizado para ${email}. \nAgora você pode fazer login para acessar os materiais psicopedagógicos!`,
    );
  }

  return (
    <main className="min-h-screen bg-[#F7F9F7] px-6 py-10 flex items-center justify-center">
      <form
        onSubmit={handleCadastro}
        className="rounded-4xl border border-[#C9B3BE] bg-[#EDE6DF] p-8 shadow-[0_20px_60px_rgba(107,143,113,0.1)]"
      >
        <h2 className="text-3xl font-bold text-[#2E2E2E]">Cadastre-se</h2>
        <p className="mt-3 text-sm leading-7 text-[#5A5A5A]">
          Preencha seus dados para entrar no universo de materiais pedagógicos
          profissionais.
        </p>

        <div className="mt-8 space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-3xl border border-[#C9B3BE] bg-white px-4 py-3 text-[#2E2E2E] outline-none transition focus:border-[#6B8F71]"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            className="w-full rounded-3xl border border-[#C9B3BE] bg-white px-4 py-3 text-[#2E2E2E] outline-none transition focus:border-[#6B8F71]"
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>

        <button className="mt-8 w-full rounded-full bg-linear-to-r from-[#A78C9A] via-[#6B8F71] to-[#A8C3A0] py-3 text-base font-semibold text-white shadow-lg shadow-[#A78C9A]/20 hover:brightness-95 transition duration-300">
          Criar conta
        </button>
      </form>
    </main>
  );
}
