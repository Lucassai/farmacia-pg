import { useEffect, useState } from "react";
import { consultar } from "../../../services/Service";

interface Categoria {
  id: number;
  nome: string;
}

function ListarCategorias() {
  const [categoria, setCategoria] = useState<Categoria[]>([]);

  async function consultarCategoria() {
    try {
      await consultar("/categorias", setCategoria);
    } catch (error: any) {
      alert("Erro!");
    }
  }

  useEffect(() => {
    consultarCategoria();
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Lista de categorias - Gerada pelo Axios
      </h1>
      <ul className="bg-white shadow-md rounded-lg p-4 space-y-2">
        {categoria.map((categoria) => (
          <li
            key={categoria.id}
            className="text-gray-700 text-lg px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            {categoria.nome}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListarCategorias;
