type Props = {
  titulo: string;
  descricao: string;
  preco?: string;
};

export default function CardMaterial({ titulo, descricao, preco }: Props) {
  return (
    <div className="border rounded-xl p-5 shadow-sm hover:shadow-md transition">

      <div className="h-40 bg-gray-200 rounded mb-4"></div>

      <h3 className="font-semibold text-lg">{titulo}</h3>

      <p className="text-sm text-gray-600 mt-2">
        {descricao}
      </p>

      {preco && (
        <p className="text-green-600 font-bold mt-3">
          {preco}
        </p>
      )}

      <button className="mt-4 w-full bg-green-600 text-white py-2 rounded">
        Ver material
      </button>

    </div>
  );
}