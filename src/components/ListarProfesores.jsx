import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

export default function ListarProfesores() {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "profesores"));
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
                        Materia: {item.materia || "-"}
                        Curso: {item.curso || "-"}
                    </li>
                ))}
            </ul>
        </div>
    );

}