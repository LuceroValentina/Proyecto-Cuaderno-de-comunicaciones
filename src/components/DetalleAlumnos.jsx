import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebase/firebase';

const DetalleAlumnos = () => {
    const { id } = useParams();
    const [alumno, setAlumno] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAlumno = async () => {
            try {
                const docRef = doc(db, "alumnos", id);
                const docSnap = await getDoc(docRef);


                if (docSnap.exists()) {
                    setAlumno({ id: docSnap.id, ...docSnap.data() });
                } else {
                    setAlumno(null);
                }
            } catch (error) {
                console.error("Error obteniendo alumno:", error);
            } finally {
                setLoading(false);
            }

        };

        fetchAlumno();
    }, [id]);

    if (loading) return <h2>Cargando...</h2>
    if (!alumno) return <h2>No se encontró el alumno</h2>

    return (
        <div>
            <h2>Detalle del alumno</h2>
            <p>ID: {alumno.id}</p>
            <p>Nombre: {alumno.nombre}</p>
            <p>Apellido: {alumno.apellido}</p>
            <p>DNI: {alumno.dni}</p>
            <p>Telefono: {alumno.telefono}</p>
            <p>Dirección: {alumno.direccion}</p>
            <p>Género: {alumno.genero}</p>
            <p>Ciclo: {alumno.ciclo}</p>
            <p>Turno: {alumno.turno}</p>
            <p>Curso: {alumno.curso}</p>            
        </div>
    );
};

export default DetalleAlumnos;