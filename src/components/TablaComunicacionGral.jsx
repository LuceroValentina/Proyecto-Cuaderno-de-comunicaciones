import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import {
  collection,
  doc,
  onSnapshot,
  deleteDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import Firmar from "./Firmar";

const TablaComunicacionGral = () => {
  const [notas, setNotas] = useState([]);
  const [notaParaEditar, setNotaParaEditar] = useState(null);
  const [notaParaFirmar, setNotaParaFirmar] = useState(null);
  const [tituloEditado, setTituloEditado] = useState("");
  const [contenidoEditado, setContenidoEditado] = useState("");

  useEffect(() => {
    const q = collection(db, "notas");
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setNotas(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  const eliminarNota = async (id) => {
    const confirmar = window.confirm("¿Estás seguro de que querés eliminar esta nota?");
    if (!confirmar) return;

    try {
      const docRef = doc(db, "notas", id);
      await deleteDoc(docRef);
      setNotas((prev) => prev.filter((nota) => nota.id !== id));
      alert("Nota eliminada correctamente");
    } catch (error) {
      console.error("Error eliminando la nota:", error);
      alert("Hubo un error al eliminar la nota.");
    }
  };

  const editarNota = async (id, nuevosDatos) => {
    try {
      const docRef = doc(db, "notas", id);
      await updateDoc(docRef, nuevosDatos);
      alert("Nota actualizada correctamente");
      setNotaParaEditar(null);
    } catch (error) {
      console.error("Error al editar la nota:", error);
      alert("Hubo un error al editar la nota.");
    }
  };

  const guardarFirmaEnNota = async (notaId, firmaUrl) => {
    try {
      const notaRef = doc(db, "notas", notaId);
      await updateDoc(notaRef, { firmaUrl });
      alert("Firma guardada correctamente");
      setNotaParaFirmar(null);
    } catch (error) {
      console.error("Error al guardar firma:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-4 relative">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Notas Enviadas</h2>

      {notas.length === 0 ? (
        <p className="text-gray-600">No hay notas aún.</p>
      ) : (
        <div className="w-full max-w-2xl space-y-4">
          {notas.map((nota) => (
            <div
              key={nota.id}
              className="bg-white rounded-xl shadow p-4 overflow-hidden break-words"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-lg text-blue-700 break-words">
                  {nota.nombre || "Sin título"}
                </h3>
                <span className="text-sm text-gray-500">
                  {nota.fecha
                    ? new Date(nota.fecha.seconds * 1000).toLocaleDateString()
                    : ""}
                </span>
              </div>

              <p className="text-gray-700 mb-2 whitespace-pre-wrap break-words">
                {nota.mensaje}
              </p>

              {nota.firmaUrl && (
                <div>
                  <h4 className="text-sm font-medium text-gray-600">Firma:</h4>
                  <img
                    src={nota.firmaUrl}
                    alt="Firma"
                    className="mt-2 w-48 h-auto border rounded"
                  />
                </div>
              )}

              <div className="flex gap-3 mt-3 flex-wrap">
                {nota.firmaUrl ? (
                  <span className="px-4 py-2 rounded bg-gray-300 text-gray-600 cursor-not-allowed select-none">
                    Firmada
                  </span>
                ) : (
                  <button
                    type="button"
                    onClick={() => setNotaParaFirmar(nota)}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                  >
                    Firmar
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => eliminarNota(nota.id)}
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                >
                  Eliminar
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setNotaParaEditar(
                      notaParaEditar && notaParaEditar.id === nota.id
                        ? null
                        : nota
                    )
                  }
                  className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
                >
                  Editar
                </button>
              </div>

              {notaParaEditar && notaParaEditar.id === nota.id && (
                <div className="mt-4 border-t pt-3">
                  <input
                    type="text"
                    placeholder="Nuevo título"
                    value={tituloEditado}
                    onChange={(e) => setTituloEditado(e.target.value)}
                    className="w-full border rounded p-2 mb-2"
                  />
                  <textarea
                    placeholder="Nuevo contenido"
                    value={contenidoEditado}
                    onChange={(e) => setContenidoEditado(e.target.value)}
                    className="w-full border rounded p-2 mb-2 resize-none overflow-y-auto"
                    rows="4"
                  ></textarea>

                  <button
                    type="button"
                    onClick={() =>
                      editarNota(nota.id, {
                        nombre: tituloEditado,
                        mensaje: contenidoEditado,
                        fecha: serverTimestamp(),
                      })
                    }
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                  >
                    Guardar cambios
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {notaParaFirmar && !notaParaFirmar.firmaUrl && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-[550px] relative">
            <h2 className="text-xl font-semibold mb-4">
              Firmar nota: {notaParaFirmar.nombre}
            </h2>

            <Firmar
              onGuardar={async (firmaUrl) => {
                await guardarFirmaEnNota(notaParaFirmar.id, firmaUrl);
              }}
            />

            <button
              onClick={() => setNotaParaFirmar(null)}
              className="mt-4 px-4 py-2 bg-gray-300 rounded-lg"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TablaComunicacionGral;
