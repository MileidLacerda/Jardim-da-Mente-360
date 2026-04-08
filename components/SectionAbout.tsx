import Image from "next/image";

export default function SectionAbout() {
  return (
    <section className="px-6 py-16 md:px-12 lg:px-20">
      <div className="flex gap-10 lg:flex-row flex-col items-center bg-linear-to-br from-[#F7F9F7] via-[#EDE6DF] to-[#C9B3BE] rounded-4xl p-8">
        <div className="aspect-square rounded-4xl flex items-center justify-center text-center text-[#5A5A5A] shrink-0">
          <Image
            src="/images/mileid-3.jpeg"
            alt="Foto da psicóloga"
            width={400}
            height={400}
            className="rounded-4xl object-cover w-full h-full"
            loading="eager"
            priority={true}
          />
        </div>

        <div className="flex-1">
          <span className="inline-flex items-center rounded-full bg-[#A78C9A]/10 px-4 py-1 text-sm font-semibold text-[#8E6F7D]">
            Sobre a psicóloga
          </span>
          <h2 className="mt-6 text-3xl font-bold text-[#2E2E2E]">
            Materiais criados por psicóloga especializada
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
      </div>
    </section>
  );
}
