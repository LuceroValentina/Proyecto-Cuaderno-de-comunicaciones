import "../css/ResumenInasistencias.css";
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
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
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
        <div className="container-inasistencias">
            <h2 className="titulo-inasistencias">Resumen de Inasistencias</h2>

            <form onSubmit={handleSubmit} className="formulario">
                <label>Mes:</label>
                <select
                    name="mes"
                    value={form.mes}
                    onChange={handleChange}
                    className="input"
                >
                    <option value="">Seleccionar mes</option>
                    {meses.map((m) => (
                        <option key={m} value={m}>
                            {m}
                        </option>
                    ))}
                </select>

                <label>Total de inasistencias:</label>
                <input
                    type="number"
                    name="total"
                    value={form.total}
                    onChange={handleChange}
                    className="input"
                />

                <label>Firma Preceptor:</label>
                <input
                    type="text"
                    name="firmaprecep"
                    value={form.firmaprecep}
                    onChange={handleChange}
                    className="input"
                />

                <button type="submit" className="boton">
                    Agregar
                </button>
            </form>

            {registros.length > 0 && (
                <table className="tabla">
                    <thead>
                        <tr>
                            <th className="th">Mes</th>
                            <th className="th">Total Inasistencias</th>
                            <th className="th">Firma Preceptor</th>
                            <th className="th">Acciones</th> 
                        </tr>
                    </thead>
                    <tbody>
                        {registros.map((r) => (
                            <tr key={r.id}> 
                                <td>{r.mes}</td>
                                <td>{r.total}</td>
                                <td>{r.firmaprecep}</td>
                                <td>
                                    <button className="btn-borrar" onClick={() => borrarRegistro(r.id)}>
                                        Borrar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default ResumenInasistencias;
