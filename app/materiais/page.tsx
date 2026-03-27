import CardMaterial from "../../components/CardMaterial";

export default function Materiais() {
  const materiais = [
    {
      titulo: "Treino de Funções Executivas",
      descricao: "Atividades para atenção e controle cognitivo",
      preco: "R$ 29,90"
    },
    {
      titulo: "Atividades de Alfabetização",
      descricao: "Leitura e escrita para crianças",
      preco: "R$ 24,90"
    },
    {
      titulo: "Jogos Cognitivos",
      descricao: "Estimule memória e raciocínio",
      preco: "R$ 19,90"
    },
    {
      titulo: "Protocolo Psicopedagógico",
      descricao: "Material completo de avaliação",
      preco: "R$ 39,90"
    }
  ];

  return (
    <main className="px-10 py-10">

      <h1 className="text-3xl font-bold mb-8">
        Materiais Psicopedagógicos
      </h1>

      {/* CATEGORIAS */}
      <div className="flex gap-4 mb-8 flex-wrap">
        <button className="px-4 py-2 bg-green-600 text-white rounded">
          Todos
        </button>
        <button className="px-4 py-2 border rounded">
          Alfabetização
        </button>
        <button className="px-4 py-2 border rounded">
          Matemática
        </button>
        <button className="px-4 py-2 border rounded">
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