import { atualizar, cadastrar } from "../../../services/Service";
import Categoria from "../../../models/Categoria";
import React, { ChangeEvent, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function FormCategoria() {
  const navigate = useNavigate();
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const { id } = useParams<{ id: string }>();

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  function retornar() {
    navigate("/categorias");
  }

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    if (id !== undefined) {
      try {
        await atualizar("/categorias", categoria, setCategoria);
        alert("Categoria atualizada");
      } catch (error: any) {
        if (error.toString().includes("403")) {
          retornar();
        } else {
          alert("Erro ao atualizar categoria.");
        }
      }
    } else {
      try {
        await cadastrar(`/categorias`, categoria, setCategoria);
        alert("Categoria cadastrada com sucesso!");
      } catch (error: any) {
        if (error.toString().includes("403")) {
          retornar();
        } else {
          alert("Erro ao cadastrar categoria.");
        }
      }
    }
    retornar();
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        {id === undefined ? "Cadastrar Categoria" : "Editar Categoria"}
      </h1>
      <form
        onSubmit={gerarNovaCategoria}
        className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md space-y-4"
      >
        <div>
          <label
            htmlFor="nome"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Nome da categoria
          </label>
          <input
            type="text"
            placeholder="Dê um nome ao seu tema"
            name="nome"
            value={categoria.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
        </button>
      </form>
    </div>
  );
}

export default FormCategoria;
