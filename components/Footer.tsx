export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">

      <div className="max-w-6xl mx-auto px-8 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* SOBRE */}
        <div>
          <h2 className="text-white font-bold text-lg mb-3">
            Jardim da Mente 360
          </h2>
          <p className="text-sm">
            Materiais psicopedagógicos para desenvolver atenção,
            memória e aprendizagem nas crianças.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="text-white font-semibold mb-3">Links</h3>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>Materiais</li>
            <li>Gratuitos</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* CONTATO */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contato</h3>
          <p className="text-sm">contato@jardimdamente360.com</p>
          <p className="text-sm mt-1">(81) 99931-7145</p>
        </div>

        {/* REDES */}
        <div>
          <h3 className="text-white font-semibold mb-3">Redes sociais</h3>
          <p className="text-sm">Instagram</p>
          <p className="text-sm">Facebook</p>
        </div>

      </div>

      {/* LINHA FINAL */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © 2026 Jardim da Mente 360 - Todos os direitos reservados
      </div>

    </footer>
  );
}