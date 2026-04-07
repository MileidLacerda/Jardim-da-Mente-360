import Image from "next/image";

export default function SectionHero() {
  return (
    <section className="px-6 py-16 md:px-12 lg:px-20">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
        <div>
          <span className="inline-flex items-center rounded-full bg-[#A78C9A]/10 px-4 py-1 text-sm font-semibold text-[#8E6F7D]">
            Conteúdo psicopedagógico profissional
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
            Jardim da Mente 360
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4F4F4F]">
            Materiais psicopedagógicos para atenção, memória e aprendizagem —
            criados para educadores e famílias com clareza, acolhimento e
            autoridade.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <button className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-[#A78C9A] via-[#6B8F71] to-[#A8C3A0] px-8 py-3 text-base font-semibold text-white shadow-lg shadow-[#A78C9A]/20 hover:brightness-95 transition duration-300">
              Ver materiais
            </button>
            <button className="inline-flex items-center justify-center rounded-full border border-[#A8C3A0] bg-white px-8 py-3 text-base font-semibold text-[#2E2E2E] hover:border-[#6B8F71] transition duration-300">
              Material Gratuito
            </button>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-[#EDE6DF] bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-[#6B8F71]">
                Atenção clínica
              </p>
              <p className="mt-2 text-sm text-[#5A5A5A]">
                Materiais com foco em resultados reais para o desenvolvimento
                infantil.
              </p>
            </div>
            <div className="rounded-3xl border border-[#EDE6DF] bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-[#A78C9A]">
                Abordagem acolhedora
              </p>
              <p className="mt-2 text-sm text-[#5A5A5A]">
                Linguagem profissional com tom humano para educadores e
                famílias.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#EDE6DF] bg-[#EDE6DF] p-6 shadow-[0_24px_80px_rgba(107,143,113,0.08)]">
          <div className="relative aspect-[4/5] rounded-[1.8rem] overflow-hidden bg-gradient-to-br from-[#F7F9F7] via-[#EDE6DF] to-[#C9B3BE]">
            <Image
              src="/images/mileid-3.jpeg"
              alt="Foto profissional da psicóloga"
              fill
              className="object-cover"
            />
          </div>
          <div className="mt-4 rounded-3xl bg-white p-5 text-sm text-[#5A5A5A] shadow-sm">
            <p>
              Mileid, psicóloga clínica e educacional, é a mente por trás do
              Jardim da Mente 360. Com formação sólida e experiência prática,
              ela cria materiais psicopedagógicos que unem rigor científico e
              empatia, ajudando educadores e famílias a promoverem o
              desenvolvimento infantil de forma eficaz e acolhedora.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
