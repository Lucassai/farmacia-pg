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
    <div className="lista">
      <h1>Lista de categorias - Gerada pelo Axios</h1>
      <ul>
        {categoria.map((categoria) => (
          <li key={categoria.id}>{categoria.nome}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListarCategorias;
