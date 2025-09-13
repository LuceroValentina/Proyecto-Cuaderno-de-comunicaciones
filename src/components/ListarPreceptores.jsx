import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

export default function ListarPreceptores() {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "preceptores"));
                const listado = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setDatos(listado);
            } catch (error) {
                console.error("Error leyendo datos:", error);

            }
        };

        fetchData();

    }, []);

    return (
        <div className="listado">
            <h2>Listado de datos</h2>
            <ul>
                {datos.map((item) => (
                    <li key={item.id}>
                        Nombre: {item.nombre || "-"}
                        Apellido: {item.apellido || "-"}
                        DNI: {item.dni || "-"}
                        Telefono: {item.telefono || "-"}
                        Direccion: {item.direccion || "-"}
                        Genero: {item.genero || "-"}
                        Curso: {item.curso || "-"}
                        Turno: {item.turno || "-"}
                    </li>
                ))}
            </ul>
        </div>
    );

}