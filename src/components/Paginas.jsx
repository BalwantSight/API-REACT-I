import PropTypes from "prop-types";

const Paginas = ({ paginasTotales, paginaActual, manejarCambioPagina }) => {
  const paginaAnterior = () => {
    if (paginaActual > 1) {
      manejarCambioPagina(paginaActual - 1);
    }
  };

  const siguientePagina = () => {
    if (paginaActual < paginasTotales) {
      manejarCambioPagina(paginaActual + 1);
    }
  };

  return (
    <div className="responsive-p">
      {paginaActual > 1 && (
        <button className="btn custom-button" onClick={paginaAnterior}>
          Página anterior
        </button>
      )}

      <span className="margin-text">
        Página {paginaActual} de {paginasTotales}
      </span>

      {paginaActual < paginasTotales && (
        <button className="btn custom-button" onClick={siguientePagina}>
          Siguiente Página
        </button>
      )}
    </div>
  );
};

Paginas.propTypes = {
  paginasTotales: PropTypes.number.isRequired,
  paginaActual: PropTypes.number.isRequired,
  manejarCambioPagina: PropTypes.func.isRequired,
};

export default Paginas;
