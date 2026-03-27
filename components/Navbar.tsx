import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white border-b px-10 py-4 flex justify-between items-center">

      <h1 className="text-xl font-bold text-green-700">
        Jardim da Mente 360
      </h1>

      <ul className="flex gap-8 text-sm font-medium">

        <li><Link href="/" className="hover:text-green-600">Home</Link></li>
        <li><Link href="/materiais" className="hover:text-green-600">Materiais</Link></li>
        <li><Link href="/materiais-gratuitos" className="hover:text-green-600">Gratuitos</Link></li>
        <li><Link href="/blog" className="hover:text-green-600">Blog</Link></li>

      </ul>

      {/* BOTÃO LOGIN */}
      <Link href="/login">
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
          Entrar
        </button>
      </Link>

    </nav>
  );
}