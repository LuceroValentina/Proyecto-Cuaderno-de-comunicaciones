import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { db } from "../../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function FormCrearNotifica() {
  const navigate = useNavigate();
  const { coleccion } = useParams(); // ← colección dinámica desde la URL
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
      const docRef = await addDoc(collection(db, coleccion), { // 👈 cambia "mensaje" por la colección dinámica
        nombre,
        fecha,
        mensaje,
        creadoEn: new Date(),
        firmaUrl: ""
      });

      console.log(`Nota creada en ${coleccion} con ID:`, docRef.id);

      setNombre("");
      setFecha("");
      setMensaje("");
      alert("Nota enviada correctamente");
      navigate(-1); // vuelve a la pantalla anterior
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
        <h2 className="font-bold text-2xl mb-2 text-gray-800">
          Crear nota en {coleccion.replace('notas_', '').toUpperCase()}
        </h2>

        <div className="space-y-4 w-60">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Ingresá tu nombre:</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="block w-full rounded-md border border-gray-300 py-2 px-3"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Seleccioná la fecha:</label>
            <input
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              className="block w-full rounded-md border border-gray-300 py-2 px-3"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Escribí tu comunicación:</label>
            <textarea
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              rows="4"
              className="block w-full rounded-md border border-gray-300 py-2 px-3 resize-none"
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition disabled:opacity-60"
            >
              {loading ? "Enviando..." : "Enviar"}
            </button>
          </div>
        </div>
      </form>

      <button
        type="button"
        onClick={() => navigate(-1)}
        className="absolute bottom-8 right-8 px-6 py-3 bg-[#3d6490] text-white rounded cursor-pointer"
      >
        Volver
      </button>
    </div>
  );
}
