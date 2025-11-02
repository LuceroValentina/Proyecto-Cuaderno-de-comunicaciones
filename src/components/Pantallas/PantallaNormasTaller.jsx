import React, { useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import { collection, addDoc, getDocs, orderBy, query, serverTimestamp, deleteDoc, doc } from "firebase/firestore";

const PantallaNormasTaller = () => {
    const [file, setFile] = useState(null);
    const [contratos, setContratos] = useState([]);

    // Cargar contratos existentes
    useEffect(() => {
        const fetchContratos = async () => {
            const q = query(collection(db, "contratosPedagogicos"), orderBy("creadoEn", "desc"));
            const snapshot = await getDocs(q);
            const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setContratos(data);
        };
        fetchContratos();
    }, []);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (!selectedFile) return;

        if (selectedFile.type !== "application/pdf") {
            alert("Solo se permiten archivos PDF");
            e.target.value = null;
            return;
        }

        setFile(selectedFile);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) {
            alert("Selecciona un PDF primero");
            return;
        }

        try {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = async () => {
                const base64PDF = reader.result;

                const docRef = await addDoc(collection(db, "contratosPedagogicos"), {
                    nombre: file.name,
                    data: base64PDF,
                    creadoEn: serverTimestamp(),
                });

                setContratos(prev => [{ id: docRef.id, nombre: file.name, data: base64PDF }, ...prev]);
                setFile(null);
            };
        } catch (error) {
            console.error("Error al subir PDF:", error);
        }
    };

    const handleEliminar = async (id) => {
        if (!window.confirm("¿Estás segura que quieres eliminar este contrato?")) return;

        try {
            await deleteDoc(doc(db, "contratosPedagogicos", id));
            setContratos(prev => prev.filter(c => c.id !== id));
        } catch (error) {
            console.error("Error al eliminar contrato:", error);
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded-lg mt-8">
            <h1 className="text-2xl font-bold mb-4 text-gray-800">Normas Taller</h1>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md max-w-3xl mx-auto my-6">
                <ul className="list-disc list-inside space-y-3 text-gray-700 leading-relaxed">
                    <li>Es OBLIGATORIO asistir al taller con cuaderno de comunicaciones, materiales para realizar la tarea o práctica de la sección y la indumentaria requerida: guardapolvo, calzado de seguridad y ropa de trabajo.</li>
                    <li>En caso de no contar con estos elementos no se autorizará el ingreso a la sección.</li>
                    <li>Se deberá respetar el horario de ingreso y salida del taller, como el de recreo.</li>
                    <li>El comportamiento dentro del taller debe ser acorde al ámbito de trabajo. Por la seguridad de todos está prohibido correr, jugar, o distraer a compañeros dentro del taller. Las herramientas deben utilizarse exclusivamente para su función específica.</li>
                    <li>Es responsabilidad del estudiante, al finalizar la rotación, solicitar al docente la colocación de la nota de la sección en el cuaderno de comunicaciones.</li>
                    <li>En caso de pérdidas o roturas de herramientas, deberán ser repuestas por el/la estudiante a la brevedad.</li>
                    <li>Debe ser respetuoso con sus compañeros, docentes y demás miembros de la institución.</li>
                </ul>
            </div>

            <h2 className="text-xl font-semibold mb-2">Espacio para adjuntar contrato pedagógico</h2>
            <form onSubmit={handleSubmit} className="mb-6">
                <label className="block mb-2">
                    <span className="text-gray-700">Adjuntar PDF:</span>
                    <input
                        type="file"
                        accept=".pdf"
                        onChange={handleFileChange}
                        className="block mt-1 w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4
                       file:rounded file:border-0 file:text-sm file:font-semibold
                       file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                </label>

                {file && <p className="mb-2 text-gray-600">Archivo seleccionado: {file.name}</p>}

                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                    Subir
                </button>
            </form>

            <h2 className="text-xl font-semibold mb-2">Contratos pedagógicos subidos</h2>
            {contratos.length === 0 ? (
                <p className="text-gray-500">No hay contratos subidos aún.</p>
            ) : (
                <ul className="space-y-2">
                    {contratos.map(contrato => (
                        <li
                            key={contrato.id}
                            className="flex justify-between items-center bg-gray-50 p-3 rounded shadow-sm"
                        >
                            <a
                                href={contrato.data}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                {contrato.nombre}
                            </a>
                            <button
                                onClick={() => handleEliminar(contrato.id)}
                                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition text-sm"
                            >
                                Eliminar
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default PantallaNormasTaller;
