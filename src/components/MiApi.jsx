import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Buscador from "./Buscador";
import Paginas from "./Paginas";
import Ordenar from "./Ordenar";
import Footer from "./Footer";
import "./MiApi.css";

const MiApi = () => {
  const [personajes, setPersonajes] = useState([]);
  const [terminoBusqueda, setTerminoBusqueda] = useState("");
  const [paginaActual, setPaginaActual] = useState(1);
  const [orden, setOrden] = useState("asc");
  const elementosPorPagina = 12;

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const respuesta = await fetch(
          "https://thronesapi.com/api/v2/Characters"
        );
        const datos = await respuesta.json();
        setPersonajes(datos);
      } catch (error) {
        console.error(error);
      }
    };

    obtenerDatos();
  }, []);

  const personajesFiltrados = personajes.filter((personaje) =>
    personaje.fullName.toLowerCase().includes(terminoBusqueda.toLowerCase())
  );

  const manejarCambioPagina = (numeroPagina) => {
    setPaginaActual(numeroPagina);
  };

  const indiceUltimoElemento = paginaActual * elementosPorPagina;
  const indicePrimerElemento = indiceUltimoElemento - elementosPorPagina;
  const elementosActuales = personajesFiltrados.slice(
    indicePrimerElemento,
    indiceUltimoElemento
  );

  const paginasTotales = Math.ceil(
    personajesFiltrados.length / elementosPorPagina
  );

  return (
    <div className="container">
      <Header />
      <Buscador
        terminoBusqueda={terminoBusqueda}
        onSearch={setTerminoBusqueda}
      />
      <div className="mb-3">
        <Ordenar
          personajesFiltrados={personajesFiltrados}
          orden={orden}
          setPersonajes={setPersonajes}
          setOrden={setOrden}
        />
        <Paginas
          paginasTotales={paginasTotales}
          paginaActual={paginaActual}
          manejarCambioPagina={manejarCambioPagina}
        />
      </div>
      <div className="row">
        {elementosActuales.map((personaje) => (
          <div key={personaje.id} className="col-md-4 mb-4">
            <div className="card">
              <img
                src={personaje.imageUrl}
                alt={personaje.fullName}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title text-white">{personaje.fullName}</h5>
                <p className="card-text">
                  <strong>Título:</strong> {personaje.title}
                </p>
                <p className="card-text">
                  <strong>Familia:</strong> {personaje.family}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default MiApi;
