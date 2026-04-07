import CardMaterial from "../../components/CardMaterial";

export default function Materiais() {
  const materiais = [
    {
      titulo: "Treino de Funções Executivas",
      descricao: "Atividades para atenção e controle cognitivo",
      preco: "R$ 29,90",
    },
    {
      titulo: "Atividades de Alfabetização",
      descricao: "Leitura e escrita para crianças",
      preco: "R$ 24,90",
    },
    {
      titulo: "Jogos Cognitivos",
      descricao: "Estimule memória e raciocínio",
      preco: "R$ 19,90",
    },
    {
      titulo: "Protocolo Psicopedagógico",
      descricao: "Material completo de avaliação",
      preco: "R$ 39,90",
    },
  ];

  return (
    <main className="px-10 py-10 bg-[#F7F9F7] min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-[#2E2E2E]">
        Materiais Psicopedagógicos
      </h1>

      {/* CATEGORIAS */}
      <div className="flex gap-4 mb-8 flex-wrap">
        <button className="px-4 py-2 bg-[#6B8F71] text-white rounded hover:bg-[#5A7C63] transition">
          Todos
        </button>
        <button className="px-4 py-2 border border-[#A8C3A0] text-[#2E2E2E] rounded hover:border-[#6B8F71] transition">
          Alfabetização
        </button>
        <button className="px-4 py-2 border border-[#A8C3A0] text-[#2E2E2E] rounded hover:border-[#6B8F71] transition">
          Matemática
        </button>
        <button className="px-4 py-2 border border-[#A8C3A0] text-[#2E2E2E] rounded hover:border-[#6B8F71] transition">
          Funções Executivas
        </button>
      </div>

      {/* GRID DE PRODUTOS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {materiais.map((item, index) => (
          <CardMaterial
            key={index}
            titulo={item.titulo}
            descricao={item.descricao}
            preco={item.preco}
          />
        ))}
      </div>
    </main>
  );
}
