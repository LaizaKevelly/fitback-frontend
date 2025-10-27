import React, { useState, useEffect } from "react";
import { usePageTitle } from "../../context/PageTitleContext";
import "./ListCategories.css";

const dadosIniciais = [
  {
    id: 1,
    nome: "Infraestrutura",
    descricao: "Equipamentos e espaço físico",
    data: "2025-07-10",
    ativo: true,
  },
  {
    id: 2,
    nome: "Atendimento",
    descricao: "Avaliação do atendimento ao cliente",
    data: "2025-07-12",
    ativo: true,
  },
  {
    id: 3,
    nome: "Limpeza",
    descricao: "Higiene e manutenção dos espaços",
    data: "2025-07-13",
    ativo: false,
  },
];

const ListCategories = () => {
  const { setTitle } = usePageTitle();
  const [categorias, setCategorias] = useState([]);
  const [categoriasFiltradas, setCategoriasFiltradas] = useState([]);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    setTitle("Consultar Categorias");
    setCategorias(dadosIniciais);
    setCategoriasFiltradas(dadosIniciais);
  }, []);

  const handleSearch = () => {
    if (busca.trim() === "") {
      setCategoriasFiltradas(categorias);
      return;
    }
    const resultado = categorias.filter((cat) =>
      cat.nome.toLowerCase().includes(busca.toLowerCase())
    );
    setCategoriasFiltradas(resultado);
  };

  const handleClearSearch = () => {
    setBusca("");
    setCategoriasFiltradas(categorias);
  };

  const handleToggleStatus = (id) => {
    const categoriasAtualizadas = categorias.map((cat) =>
      cat.id === id ? { ...cat, ativo: !cat.ativo } : cat
    );
    setCategorias(categoriasAtualizadas);
    setCategoriasFiltradas(categoriasAtualizadas);
  };

  const handleEditar = (id) => {
    // TODO: Implementar navegação para página de edição
    alert(`Editar categoria ID ${id}`);
  };

  const handleInativar = (id) => {
    // TODO: Implementar confirmação e inativação
    const confirmar = window.confirm(
      "Deseja realmente inativar esta categoria?"
    );
    if (confirmar) {
      handleToggleStatus(id);
    }
  };

  const handleNovaCategoria = () => {
    // TODO: Implementar navegação para página de cadastro
    window.location.href = "/cadastrar-categoria";
  };

  return (
    <div className="categorias-page">
      <div className="categorias-header">
        <button className="btn-nova" onClick={handleNovaCategoria}>
          + Nova Categoria
        </button>
      </div>

      <div className="busca-container">
        <input
          type="text"
          placeholder="Busque uma categoria por nome"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSearch()}
        />
        <button className="btn-pesquisar" onClick={handleSearch}>
          Pesquisar
        </button>
        {busca && (
          <button className="btn-limpar" onClick={handleClearSearch}>
            Limpar
          </button>
        )}
      </div>

      <div className="tabela-container">
        <table className="tabela">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Data de Cadastro</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {categoriasFiltradas.length > 0 ? (
              categoriasFiltradas.map((cat) => (
                <tr key={cat.id}>
                  <td>{cat.id}</td>
                  <td>{cat.nome}</td>
                  <td>{cat.descricao}</td>
                  <td>{new Date(cat.data).toLocaleDateString("pt-BR")}</td>
                  <td>
                    <button
                      className={`status ${cat.ativo ? "ativo" : "inativo"}`}
                      onClick={() => handleToggleStatus(cat.id)}
                    >
                      {cat.ativo ? "Ativo" : "Inativo"}
                    </button>
                  </td>
                  <td className="acoes">
                    <button
                      className="btn-acao btn-editar"
                      onClick={() => handleEditar(cat.id)}
                      title="Editar"
                    >
                      ✏️
                    </button>
                    <button
                      className="btn-acao btn-deletar"
                      onClick={() => handleInativar(cat.id)}
                      title="Inativar"
                    >
                      🗑️
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="sem-resultados">
                  Nenhuma categoria encontrada
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListCategories;
