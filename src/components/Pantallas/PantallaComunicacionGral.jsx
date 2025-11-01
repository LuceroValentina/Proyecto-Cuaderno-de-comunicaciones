import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { collection, onSnapshot, query, orderBy, doc, setDoc } from "firebase/firestore";
import Firmar from "../Firmar";

export default function PantallaComunicacionGral() {
  const navigate = useNavigate();
  const [notas, setNotas] = useState([]);
  const [notaSeleccionada, setNotaSeleccionada] = useState(null);

  useEffect(() => {
    const q = query(collection(db, "mensaje"), orderBy("creadoEn", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNotas(data);
    });

    return () => unsubscribe(); 
  }, []);

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
                <h3 className="font-semibold text-lg text-blue-700">{nota.nombre}</h3>
                <span className="text-sm text-gray-500">{nota.fecha}</span>
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
                const docRef = doc(db, "mensaje", notaSeleccionada.id);
                await setDoc(docRef, { firmaUrl: url }, { merge: true });

                setNotas((prev) =>
                  prev.map((m) =>
                    m.id === notaSeleccionada.id ? { ...m, firmaUrl: url } : m
                  )
                );
                setNotaSeleccionada(null);
              }}
            />

            
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => navigate("/crearnota")}
        className="absolute bottom-6 right-6 bg-white text-sky-600 font-bold w-14 h-14 rounded-full shadow-md hover:bg-sky-50 transition flex items-center justify-center text-xl leading-none"
      >
        Crear
      </button>

      <button
        type="button"
        onClick={() => navigate("/seccion_teoria")}
        className="absolute top-6 left-6 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg shadow-md transition"
      >
        Volver
      </button>
    </div>
  );
}
