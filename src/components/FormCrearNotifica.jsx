import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function FormCrearNotifica() {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nombre || !fecha || !mensaje) {
      alert("Completá todos los campos");
      return;
    }

    setLoading(true);

    try {
      const docRef = await addDoc(collection(db, "mensaje"), {
        nombre,
        fecha,
        mensaje,
        creadoEn: new Date(),
        firmaUrl: ""
      });

      console.log("Nota creada con ID:", docRef.id);

      setNombre("");
      setFecha("");
      setMensaje("");
      alert("Nota enviada correctamente");
      navigate("/PantallaComunicacionGral");
    } catch (error) {
      console.error("Error al enviar:", error);
      alert("Ocurrió un error al enviar la nota");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <form
        onSubmit={handleSubmit}
        className="w-1/2 min-w-[300px] max-w-sm bg-gray-100 rounded overflow-hidden shadow-lg flex flex-col items-center justify-center p-4 space-y-4"
      >
        <h2 className="font-bold text-2xl mb-2 text-gray-800">Comunicación General</h2>
        <div className="space-y-4 w-60">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Ingresá tu nombre:</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="block w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Seleccioná la fecha:</label>
            <input
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              className="block w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Escribí tu comunicación:</label>
            <textarea
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              rows="4"
              className="block w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none resize-none"
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded transition disabled:opacity-60"
            >
              {loading ? "Enviando..." : "Enviar"}
            </button>
          </div>
        </div>
      </form>

      <button
        type="button"
        onClick={() => navigate("/PantallaComunicacionGral")}
        className="absolute bottom-8 right-8 px-6 py-3 bg-[#3d6490] text-white rounded cursor-pointer"
      >
        Volver
      </button>
    </div>
  );
}
