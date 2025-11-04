import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import {
  collection,
  doc,
  addDoc,
  onSnapshot,
  deleteDoc,
  updateDoc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";
import Firmar from "./Firmar";

const TablaComunicacionGral = ({ coleccion }) => {
  const [notas, setNotas] = useState([]);
  const [notaSeleccionada, setNotaSeleccionada] = useState(null);
  const [tituloEditado, setTituloEditado] = useState("");
  const [contenidoEditado, setContenidoEditado] = useState("");

  // 🔄 Escucha en tiempo real
  useEffect(() => {
    if (!coleccion) return;
    const q = collection(db, coleccion);
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setNotas(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, [coleccion]);

  // 🗑️ Eliminar nota
  const eliminarNota = async (id) => {
    try {
      const docRef = doc(db, coleccion, id);
      await deleteDoc(docRef);
      setNotas((prev) => prev.filter((nota) => nota.id !== id));
      setNotaSeleccionada(null);
      alert("Nota eliminada correctamente");
    } catch (error) {
      console.error("Error eliminando la nota:", error);
      alert("Hubo un error al eliminar la nota.");
    }
  };

  // ✏️ Editar nota
  const editarNota = async (id, nuevosDatos) => {
    try {
      const docRef = doc(db, coleccion, id);
      await updateDoc(docRef, nuevosDatos);
      setNotas((prev) =>
        prev.map((nota) =>
          nota.id === id ? { ...nota, ...nuevosDatos } : nota
        )
      );
      alert("Nota actualizada correctamente");
      setNotaSeleccionada(null);
    } catch (error) {
      console.error("Error al editar la nota:", error);
      alert("Hubo un error al editar la nota.");
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
            <div key={nota.id} className="bg-white rounded-xl shadow p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-lg text-blue-700">
                  {nota.nombre || "Sin título"}
                </h3>
                <span className="text-sm text-gray-500">
                  {nota.fecha
                    ? new Date(nota.fecha.seconds * 1000).toLocaleDateString()
                    : ""}
                </span>
              </div>

              <p className="text-gray-700 mb-2">{nota.mensaje}</p>

              {nota.firmaUrl ? (
                <div>
                  <h4 className="text-sm font-medium text-gray-600">Firma:</h4>
                  <img
                    src={nota.firmaUrl}
                    alt="Firma"
                    className="mt-2 w-48 h-auto border rounded"
                  />
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setNotaSeleccionada(nota)}
                  className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Firmar
                </button>
              )}
            </div>
          ))}
        </div>
      )}

      {notaSeleccionada && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-[550px] relative">
            <button
              type="button"
              onClick={() => setNotaSeleccionada(null)}
              className="text-gray-500 hover:text-gray-700 absolute top-4 right-4 text-lg"
            >
              ✖
            </button>

            <Firmar
              notaId={notaSeleccionada.id}
              onFirmaGuardada={async (url) => {
                const docRef = doc(db, coleccion, notaSeleccionada.id);
                await setDoc(docRef, { firmaUrl: url }, { merge: true });
                setNotas((prev) =>
                  prev.map((m) =>
                    m.id === notaSeleccionada.id ? { ...m, firmaUrl: url } : m
                  )
                );
                setNotaSeleccionada(null);
              }}
            />

            <button
              type="button"
              onClick={() => eliminarNota(notaSeleccionada.id)}
              className="mt-3 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Eliminar
            </button>

            <div className="mt-4">
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
                className="w-full border rounded p-2 mb-2"
              ></textarea>

              <button
                type="button"
                onClick={() =>
                  editarNota(notaSeleccionada.id, {
                    titulo: tituloEditado,
                    contenido: contenidoEditado,
                    fecha: serverTimestamp(),
                  })
                }
                className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 mr-2"
              >
                Guardar cambios
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TablaComunicacionGral;
