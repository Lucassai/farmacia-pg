import Produto from "./Produto";
import Prodoto from "./Produto";

export default interface Categoria {
  id: number;
  nome: string;
  produto: Produto | null;
}
