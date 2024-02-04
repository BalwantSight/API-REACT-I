import PropTypes from "prop-types";

const Ordenar = ({ personajesFiltrados, orden, setPersonajes, setOrden }) => {
  const manejarOrdenamiento = () => {
    const comparador = (a, b) => {
      const nombreA = a.fullName.toLowerCase();
      const nombreB = b.fullName.toLowerCase();
      return nombreA.localeCompare(nombreB);
    };

    let personajesOrdenados = [...personajesFiltrados].sort(comparador);
    if (orden === "desc") {
      personajesOrdenados = personajesOrdenados.reverse();
    }

    setPersonajes(personajesOrdenados);
    setOrden(orden === "asc" ? "desc" : "asc");
  };

  return (
    <button className="btn custom-button" onClick={manejarOrdenamiento}>
      Ordenar {orden === "asc" ? "de A-Z" : "de Z-A"}
    </button>
  );
};

Ordenar.propTypes = {
  personajesFiltrados: PropTypes.array.isRequired,
  orden: PropTypes.string.isRequired,
  setPersonajes: PropTypes.func.isRequired,
  setOrden: PropTypes.func.isRequired,
};

export default Ordenar;
