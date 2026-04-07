const highlights = [
  {
    title: "Funções Executivas",
    description: "Atividades para atenção e controle cognitivo.",
  },
  {
    title: "Alfabetização",
    description: "Desenvolvimento da leitura e escrita com impacto.",
  },
  {
    title: "Jogos Cognitivos",
    description: "Estímulos que envolvem memória e raciocínio.",
  },
];

export default function SectionHighlights() {
  return (
    <section className="px-6 py-16 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#2E2E2E]">
          Materiais em destaque
        </h2>
        <p className="mt-4 text-base leading-8 text-[#5A5A5A]">
          Recursos pensados para oferecer foco, atenção e suporte pedagógico de
          forma clara, elegante e confiável.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="rounded-4xl border border-[#EDE6DF] bg-white p-6 shadow-sm"
          >
            <h3 className="font-semibold text-[#2E2E2E]">{item.title}</h3>
            <p className="mt-3 text-sm text-[#5A5A5A]">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
