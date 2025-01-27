function Home() {
  return (
    <>
      <div className="bg-pink-300 flex justify-center">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">Farmácia PG</h2>
            <p className="text-xl">Aqui você encontra de tudo</p>

            <div className="flex justify-around gap-4">
              <div className="flex justify-around gap-4"></div>
            </div>
          </div>

          <div className="flex justify-center ">
            <img
              src="https://png.pngtree.com/thumb_back/fw800/background/20230929/pngtree-vibrant-array-of-medication-stunning-3d-visualization-image_13526019.png"
              alt="Imagem Farmacia"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
