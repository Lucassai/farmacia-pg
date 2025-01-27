function Navbar() {
  return (
    <>
      <div className="w-full flex justify-center py-4 bg-pink-400 text-white">
        <div className="container flex justify-between text-xl">
          Farmacia PG
          <div className="flex gap-4">
            <div className="hover:underline cursor-pointer">Categoria</div>
            <div className="hover:underline cursor-pointer">Produto</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
