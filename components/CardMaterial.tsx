type Props = {
  titulo: string;
  descricao: string;
  preco?: string;
};

export default function CardMaterial({ titulo, descricao, preco }: Props) {
  return (
    <div className="border border-[#EDE6DF] rounded-3xl p-6 shadow-sm bg-[#F7F9F7] hover:shadow-md transition duration-300">
      <div className="h-40 bg-[#C9B3BE] rounded-3xl mb-4"></div>

      <div className="inline-flex items-center gap-2 mb-3">
        <span className="h-2 w-10 rounded-full bg-[#A78C9A]"></span>
        <span className="text-xs uppercase tracking-[0.2em] text-[#8E6F7D]">
          Destaque
        </span>
      </div>

      <h3 className="font-semibold text-lg text-[#2E2E2E]">{titulo}</h3>

      <p className="text-sm text-[#5A5A5A] mt-3">{descricao}</p>

      {preco && <p className="text-[#A78C9A] font-semibold mt-4">{preco}</p>}

      <button className="mt-6 w-full bg-gradient-to-r from-[#A78C9A] via-[#6B8F71] to-[#A8C3A0] text-white py-2 rounded-2xl shadow-md hover:brightness-95 transition duration-300">
        Ver material
      </button>
    </div>
  );
}
