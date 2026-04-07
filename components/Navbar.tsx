import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#EDE6DF] border-b border-[#C9B3BE] px-10 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-[#3F5D46]">Jardim da Mente 360</h1>

      <ul className="flex gap-8 text-sm font-medium text-[#2E2E2E]">
        <li>
          <Link href="/" className="hover:text-[#6B8F71]">
            Home
          </Link>
        </li>
        <li>
          <Link href="/materiais" className="hover:text-[#6B8F71]">
            Materiais
          </Link>
        </li>
        <li>
          <Link href="/materiais-gratuitos" className="hover:text-[#6B8F71]">
            Gratuitos
          </Link>
        </li>
        <li>
          <Link href="/blog" className="hover:text-[#6B8F71]">
            Blog
          </Link>
        </li>
      </ul>

      <Link href="/login">
        <button className="bg-[#6B8F71] text-white px-4 py-2 rounded-lg shadow-sm hover:bg-[#5A7C63] transition">
          Entrar
        </button>
      </Link>
    </nav>
  );
}
