import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Registrodefirmas.css";
//import "../css/Elementos.css";

function FormRegistroFirmas() {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTeléfono] = useState('');
  const [direccion, setDirección] = useState('');
  const [documento, setDocumento] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nombre:', nombre);
    console.log('Apellido:', apellido);
    console.log('Teléfono:', telefono);
    console.log('Dirección', direccion);
    console.log('Documento', documento);
  };

  return (
    <div className="contenedor">
      <div className="Registrodefirmas">
        <form onSubmit={handleSubmit} className="glass-form">
          <h2>Registro de Firmas</h2>
          <div className="Registro">

            Nombre:
            <input
              type="text"
              value={nombre}
              placeholder="Ingrese su Nombre"
              onChange={(e) => setNombre(e.target.value)}
            />

            Apellido:
            <input
              type="text"
              value={apellido}
              placeholder="Ingrese su Apellido"
              onChange={(e) => setApellido(e.target.value)}
            />

            Teléfono:
            <input
              type="number"
              value={telefono}
              placeholder="Ingrese su Teléfono"
              onChange={(e) => setTeléfono(e.target.value)}
            />

            Dirección:
            <input
              type="text"
              value={direccion}
              placeholder="Ingrese su Dirección"
              onChange={(e) => setDirección(e.target.value)}
            />

            Documento:
            <input
              type="number"
              value={documento}
              placeholder="Ingrese su Documento"
              onChange={(e) => setDocumento(e.target.value)}
            />
          </div>
          <button className="boton_enviar" type="submit">Enviar</button>
        </form>
      </div>
      <button
        onClick={() => navigate("/seccion_teoria")}
        className="absolute bottom-8 right-8 px-6 py-3 bg-[#3d6490] text-white rounded cursor-pointer"
      >
        Volver
      </button>
    </div>
  );
}
export default FormRegistroFirmas;