"use client";

import { useRouter } from "next/navigation";

export default function SectionHero() {
  const router = useRouter();

  return (
    <section className="min-h-screen px-6 py-24 md:px-12 lg:px-20 text-center flex flex-col justify-center">
      <div className="max-w-3xl mx-auto">
        <span className="inline-flex items-center rounded-full bg-[#A78C9A]/10 px-4 py-1 text-sm font-semibold text-[#8E6F7D]">
          Materiais psicopedagógicos profissionais
        </span>

        <h1 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
          Desenvolva atenção, memória e aprendizagem infantil
        </h1>

        <p className="mt-6 text-lg leading-8 text-[#5A5A5A]">
          Recursos psicopedagógicos práticos para educadores e famílias que
          buscam melhorar o desenvolvimento cognitivo das crianças.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <button
            onClick={() => router.push("/materiais")}
            className="cursor-pointer rounded-full bg-linear-to-r from-[#A78C9A] via-[#6B8F71] to-[#A8C3A0] px-8 py-3 text-white font-semibold shadow-lg hover:scale-[1.03] transition"
          >
            Ver materiais
          </button>

          <button className="cursor-pointer rounded-full border border-[#A8C3A0] px-8 py-3 font-semibold hover:border-[#6B8F71] transition">
            Material gratuito
          </button>
        </div>
      </div>
    </section>
  );
}
