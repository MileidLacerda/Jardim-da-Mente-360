"use client";

import { useRouter } from "next/navigation";

import SectionHero from "../components/SectionHero";
import SectionGallery from "../components/SectionGallery";
import SectionHighlights from "../components/SectionHighlights";
import SectionAbout from "@/components/SectionAbout";

export default function Home() {
  const router = useRouter();

  return (
    <main className="bg-linear-to-b from-[#F7F9F7] via-[#F7F9F7] to-[#EEF3EE] text-[#2E2E2E]">
      <SectionHero />

      <SectionGallery />

      <SectionHighlights />

      <SectionAbout />

      <section className="relative text-white text-center py-24 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-[#6B8F71] via-[#7FA885] to-[#A8C3A0]" />

        <div className="relative max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Comece agora a desenvolver o potencial das crianças
          </h2>

          <p className="mt-4 text-white/90">
            Materiais psicopedagógicos criados para educadores e famílias que
            desejam resultados reais.
          </p>

          <button
            onClick={() => router.push("/materiais")}
            className="cursor-pointer mt-8 rounded-full bg-white px-10 py-4 text-[#6B8F71] font-semibold shadow-lg hover:scale-105 transition"
          >
            Ver materiais
          </button>
        </div>
      </section>
    </main>
  );
}
