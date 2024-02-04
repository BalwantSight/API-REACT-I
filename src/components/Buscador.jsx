import React from "react";
import PropTypes from "prop-types";

const Buscador = ({ terminoBusqueda, onSearch }) => {
  const manejarCambio = (e) => {
    onSearch(e.target.value);
  };

  return (
    <nav className="navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <div className="mx-auto navbar-brand text-center">
          <h1>Personajes de Juego de Tronos</h1>
        </div>
        <div className="text-center">
          <input
            type="text"
            placeholder="Buscar Personaje"
            className="form-control mb-3"
            value={terminoBusqueda}
            onChange={manejarCambio}
          />
          <button
            className="btn btn-link text-white"
            onClick={() => {
              // Lógica para reiniciar la búsqueda, por ejemplo, redirigir a la página principal
              window.location.href = "/";
            }}
          >
            Reiniciar Búsqueda
          </button>
        </div>
      </div>
    </nav>
  );
};

Buscador.propTypes = {
  terminoBusqueda: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default Buscador;
