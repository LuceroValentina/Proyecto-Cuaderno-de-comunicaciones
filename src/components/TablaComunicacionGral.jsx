import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import {
    collection, doc, onSnapshot, deleteDoc, updateDoc, serverTimestamp,
} from "firebase/firestore";

const TablaComunicacionGral = ({ coleccion }) => {
    const [notas, setNotas] = useState([]);
    const [notaSeleccionada, setNotaSeleccionada] = useState(null);
    const [tituloEditado, setTituloEditado] = useState("");
    const [contenidoEditado, setContenidoEditado] = useState("");

    useEffect(() => {
        if (!coleccion) return;
        const q = collection(db, coleccion);
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setNotas(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        });
        return () => unsubscribe();
    }, [coleccion]);

    const eliminarNota = async (id) => {
        const confirmar = window.confirm("¿Estás seguro de que querés eliminar esta nota?");
        if (!confirmar) return; 

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

                            {nota.firmaUrl ? (
                                <div>
                                    <h4 className="text-sm font-medium text-gray-600">Firma:</h4>
                                    <img
                                        src={nota.firmaUrl}
                                        alt="Firma"
                                        className="mt-2 w-48 h-auto border rounded"
                                    />
                                </div>
                            ) : null}

                            <div className="flex gap-3 mt-3 flex-wrap">
                                {!nota.firmaUrl && (
                                    <button
                                        type="button"
                                        onClick={() => setNotaSeleccionada(nota)}
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
                                        setNotaSeleccionada((prev) =>
                                            prev && prev.id === nota.id ? null : nota
                                        )
                                    }
                                    className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
                                >
                                    Editar
                                </button>
                            </div>

                            {notaSeleccionada && notaSeleccionada.id === nota.id && (
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
        </div>
    );
};

export default TablaComunicacionGral;
