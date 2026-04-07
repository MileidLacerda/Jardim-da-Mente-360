export default function SectionAbout() {
  return (
    <section className="px-6 py-16 md:px-12 lg:px-20">
      <div className="grid gap-10 lg:grid-cols-2 items-center">
        <div className="rounded-[2rem] border border-[#EDE6DF] bg-white p-8 shadow-sm">
          <span className="inline-flex items-center rounded-full bg-[#A78C9A]/10 px-4 py-1 text-sm font-semibold text-[#8E6F7D]">
            Sobre a psicóloga
          </span>
          <h2 className="mt-6 text-3xl font-bold text-[#2E2E2E]">
            Conteúdo com embasamento e empatia
          </h2>
          <p className="mt-5 text-base leading-8 text-[#5A5A5A]">
            Sou psicóloga e fundadora do Jardim da Mente 360. Crio materiais
            práticos e éticos para apoiar educadores e famílias em processos de
            aprendizagem infantil.
          </p>
          <ul className="mt-8 space-y-4 text-sm text-[#5A5A5A]">
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#6B8F71]" />
              Materiais imediatamente utilizáveis em sala e com crianças.
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#A78C9A]" />
              Linguagem profissional, clara e acolhedora para famílias.
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#3F5D46]" />
              Foco em atenção, memória e recursos cognitivos eficazes.
            </li>
          </ul>
        </div>

        <div className="rounded-[2rem] border border-[#EDE6DF] bg-[#EDE6DF] p-6 shadow-sm">
          <div className="aspect-[4/5] rounded-[2rem] bg-gradient-to-br from-[#F7F9F7] via-[#EDE6DF] to-[#C9B3BE] flex items-center justify-center text-center text-[#5A5A5A]">
            <div className="px-6">
              <p className="uppercase tracking-[0.24em] text-sm">
                Foto da psicóloga
              </p>
              <p className="mt-4 text-xl font-semibold text-[#2E2E2E]">
                Imagem de apresentação
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
