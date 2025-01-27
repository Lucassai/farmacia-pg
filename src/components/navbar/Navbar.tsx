import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="w-full flex justify-center py-4 bg-pink-400 text-white">
        <div className="container flex justify-between text-xl">
          <Link to={"/"} className="hover:underline">
            Farmacia PG
          </Link>
          <div className="flex gap-4">
            <Link className="hover:underline cursor-pointer" to="/categoria">
              Categorias
            </Link>
            <Link to="/cadastrar" className="hover:underline cursor-pointer">
              Cadastrar Categoria
            </Link>
            <div className="hover:underline cursor-pointer">Produto</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
