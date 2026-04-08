import Image from "next/image";

const galleryItems = [
  {
    title: "Planejamentos",
    description: "Planejamentos para atividades educativas.",
    src: "/images/planejamento.jpeg",
  },
  {
    title: "Atividades",
    description: "Atividades práticas para os alunos.",
    src: "/images/atividades.jpeg",
  },
  {
    title: "Relatórios",
    description: "Relatórios de acompanhamento pedagógico.",
    src: "/images/relatório.jpeg",
  },
];

export default function SectionGallery() {
  return (
    <section className="min-h-screen px-6 py-24 md:px-12 lg:px-20 flex flex-col justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-flex items-center rounded-full bg-[#A78C9A]/10 px-4 py-1 text-sm font-semibold text-[#8E6F7D]">
          Materiais em destaque
        </span>
        <h2 className="mt-6 text-3xl font-bold text-[#2E2E2E]">
          Materiais utilizados por educadores
        </h2>
        <p className="mt-4 text-base leading-8 text-[#5A5A5A]">
          Recursos práticos e confiáveis para apoiar o desenvolvimento cognitivo
          das crianças, com foco em atenção, memória e aprendizagem.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {galleryItems.map((item) => (
          <div
            key={item.title}
            className="group rounded-4xl border border-[#EDE6DF] bg-white overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"
          >
            <div className="aspect-4/3 bg-[#EDE6DF] overflow-hidden">
              <Image
                src={item.src}
                alt={item.title}
                width={400}
                height={300}
                className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
              />
            </div>
            <div className="p-5">
              <p className="font-semibold text-[#2E2E2E]">{item.title}</p>
              <p className="mt-2 text-sm text-[#5A5A5A]">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
