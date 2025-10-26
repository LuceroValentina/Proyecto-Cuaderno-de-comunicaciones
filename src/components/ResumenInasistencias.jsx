import { useState, useEffect } from "react";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebase";

function ResumenInasistencias() {
    const [form, setForm] = useState({
        mes: "",
        total: "",
        firmaprecep: "",
    });
    const [registros, setRegistros] = useState([]);

    useEffect(() => {
        const obtenerRegistros = async () => {
            const querySnapshot = await getDocs(collection(db, "inasistencias"));
            const registrosFirebase = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            setRegistros(registrosFirebase);
        };

        obtenerRegistros();
    }, []);

    const meses = [
        "Marzo", "Abril", "Mayo", "Junio", "Julio",
        "Agosto", "Septiembre", "Octubre", "Noviembre",
    ];

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const borrarRegistro = async (id) => {
        await deleteDoc(doc(db, "inasistencias", id));
        setRegistros(registros.filter(r => r.id !== id));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!form.mes || form.total === "") {
            alert("Completá al menos el mes y el total de inasistencias");
            return;
        }

        try {
            const docRef = await addDoc(collection(db, "inasistencias"), form);
            setRegistros([...registros, { id: docRef.id, ...form }]);
            setForm({
                mes: "",
                total: "",
                firmaprecep: "",
            });
        } catch (error) {
            console.error("Error agregando registro:", error);
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-lg mt-10">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
                Resumen de Inasistencias
            </h2>

            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 mb-8"
            >
                <div className="flex flex-col">
                    <label className="font-medium text-gray-700 mb-1">Mes:</label>
                    <select
                        name="mes"
                        value={form.mes}
                        onChange={handleChange}
                        className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Seleccionar mes</option>
                        {meses.map((m) => (
                            <option key={m} value={m}>{m}</option>
                        ))}
                    </select>
                </div>

                <div className="flex flex-col">
                    <label className="font-medium text-gray-700 mb-1">Total de inasistencias:</label>
                    <input
                        type="number"
                        name="total"
                        value={form.total}
                        onChange={handleChange}
                        className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="font-medium text-gray-700 mb-1">Firma Preceptor:</label>
                    <input
                        type="text"
                        name="firmaprecep"
                        value={form.firmaprecep}
                        onChange={handleChange}
                        className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition"
                >
                    Agregar
                </button>
            </form>

            {registros.length > 0 && (
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-blue-100 text-gray-700">
                                <th className="p-3 border text-left">Mes</th>
                                <th className="p-3 border text-left">Total Inasistencias</th>
                                <th className="p-3 border text-left">Firma Preceptor</th>
                                <th className="p-3 border text-left">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {registros.map((r) => (
                                <tr
                                    key={r.id}
                                    className="hover:bg-gray-50 border-b"
                                >
                                    <td className="p-3 border">{r.mes}</td>
                                    <td className="p-3 border">{r.total}</td>
                                    <td className="p-3 border">{r.firmaprecep}</td>
                                    <td className="p-3 border">
                                        <button
                                            onClick={() => borrarRegistro(r.id)}
                                            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition"
                                        >
                                            Borrar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default ResumenInasistencias;
