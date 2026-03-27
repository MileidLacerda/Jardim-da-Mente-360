export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section className="text-center py-20 bg-blue-100">
        <h1 className="text-4xl font-bold">
          Jardim da Mente 360
        </h1>

        <p className="mt-4 text-lg">
          Materiais psicopedagógicos para desenvolver atenção,
          memória e aprendizagem nas crianças.
        </p>

        <div className="mt-6">
          <button className="bg-green-600 text-white px-4 py-2 rounded mr-2">
            Ver Materiais
          </button>

          <button className="border px-4 py-2 rounded">
            Material Gratuito
          </button>
        </div>
      </section>

      {/* MATERIAIS */}
      <section className="py-16">
        <h2 className="text-2xl font-bold text-center mb-10">
          Materiais em destaque
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10">
          <div className="p-5 border rounded-lg">
            <h3 className="font-semibold">Funções Executivas</h3>
            <p className="text-sm mt-2">
              Atividades para atenção e controle cognitivo
            </p>
          </div>

          <div className="p-5 border rounded-lg">
            <h3 className="font-semibold">Alfabetização</h3>
            <p className="text-sm mt-2">
              Desenvolvimento da leitura e escrita
            </p>
          </div>

          <div className="p-5 border rounded-lg">
            <h3 className="font-semibold">Jogos Cognitivos</h3>
            <p className="text-sm mt-2">
              Estimule memória e raciocínio
            </p>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="bg-gray-100 py-16">
        <h2 className="text-2xl font-bold text-center mb-10">
          Como funciona
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10 text-center">
          <div>
            <h3 className="font-semibold">1. Escolha</h3>
            <p>Selecione o material ideal</p>
          </div>

          <div>
            <h3 className="font-semibold">2. Download</h3>
            <p>Baixe imediatamente</p>
          </div>

          <div>
            <h3 className="font-semibold">3. Aplicação</h3>
            <p>Use com seus alunos</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-600 text-white text-center py-16">
        <h2 className="text-2xl font-bold">
          Comece agora a desenvolver o potencial das crianças
        </h2>

        <button className="mt-6 bg-white text-green-600 px-6 py-2 rounded">
          Ver materiais
        </button>
      </section>

    </main>
  );
}