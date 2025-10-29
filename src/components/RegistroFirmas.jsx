import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Registrodefirmas.css";

function RegistroFirmas() {
  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [parentesco, setParentesco] = useState("");
  const [firma, setFirma] = useState("");
  const [loading, setLoading] = useState(false);

  const soloLetras = (valor) => /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(valor);

  const handleChange = (setter) => (e) => {
    const valor = e.target.value;
    if (valor === "" || soloLetras(valor)) {
      setter(valor);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre || !apellido || !parentesco || !firma) {
      alert("Completá todos los campos");
      return;
    }

    if (!soloLetras(nombre) || !soloLetras(apellido) || !soloLetras(parentesco) || !soloLetras(firma)) {
      alert("Solo se permiten letras y espacios en los campos de texto");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      alert("Formulario enviado correctamente ");
      setLoading(false);
      setNombre("");
      setApellido("");
      setParentesco("");
      setFirma("");
    }, 1000);
  };

  return (
    <div className="contenedor flex flex-col items-center justify-center min-h-screen relative">
      <div className="Registrodefirmas w-full max-w-md rounded-xl shadow-lg p-6">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <h2 className="text-2xl font-bold text-center text-white mb-4">
            Registro de Firmas
          </h2>

          <div className="Registro flex flex-col space-y-3">
            <label className="text-white font-medium">Nombre:</label>
            <input
              type="text"
              value={nombre}
              placeholder="Ingrese su Nombre"
              onChange={handleChange(setNombre)}
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <label className="text-white font-medium">Apellido:</label>
            <input
              type="text"
              value={apellido}
              placeholder="Ingrese su Apellido"
              onChange={handleChange(setApellido)}
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <label className="text-white font-medium">Parentesco:</label>
            <input
              type="text"
              value={parentesco}
              placeholder="Ingrese su Parentesco"
              onChange={handleChange(setParentesco)}
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <label className="text-white font-medium">Firma:</label>
            <input
              type="text"
              value={firma}
              placeholder="Ingrese su Firma"
              onChange={handleChange(setFirma)}
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-4 px-5 py-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded transition w-auto mx-auto block disabled:opacity-60"
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </div>

      <button
        onClick={() => navigate("/seccion_teoria")}
        className="absolute bottom-8 right-8 px-5 py-2 bg-[#3d6490] hover:bg-[#335577] text-white rounded shadow-md transition"
      >
        Volver
      </button>
    </div>
  );
}

export default RegistroFirmas;
