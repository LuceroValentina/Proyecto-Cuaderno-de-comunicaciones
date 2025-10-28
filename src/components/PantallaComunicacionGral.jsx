import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase/firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

export default function PantallaComunicacionGral() {
    const navigate = useNavigate();
    const [notas, setNotas] = useState([]);

    useEffect(() => {

        const q = query(collection(db, "mensajes"), orderBy("creadoEn", "desc"));
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
        <div className="min-h-screen flex flex-col items-center py-10 px-4">
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
                            <p className="text-gray-700">{nota.mensaje}</p>
                        </div>
                    ))}
                </div>
            )}

            <button
                onClick={() => navigate("/crearnota")}
                className="absolute bottom-6 right-6 bg-white text-sky-600 font-bold w-14 h-14 rounded-full shadow-md hover:bg-sky-50 transition flex items-center justify-center text-xl leading-none"
            >
                Crear
            </button>

            <button
                onClick={() => navigate("/seccion_teoria")}
                className="absolute top-6 left-6 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg shadow-md transition"
            >
                Volver
            </button>
        </div>
    );


}